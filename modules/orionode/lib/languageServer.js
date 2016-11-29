/*******************************************************************************
 * Copyright (c) 2016 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*eslint-env node, rimraf*/
/*eslint-disable no-sync*/
var path = require('path');
var cp = require('child_process');
var rimraf = require('rimraf');
var api = require('./api');
var net = require('net');
var fs = require('fs');

var IN_PORT = 8123;
var OUT_PORT = 8124;

function generatePatchedEnv(env, inPort, outPort) {
	// Set the two unique pipe names and the electron flag as process env
	var newEnv = {};
	for (var key in env) {
		newEnv[key] = env[key];
	}
	newEnv['STDIN_PORT'] = inPort;
	newEnv['STDOUT_PORT'] = outPort;
	return newEnv;
}

function fork(modulePath, args, options, callback) {
	var callbackCalled = false;
	var resolve = function(result) {
		if (callbackCalled) {
			return;
		}
		callbackCalled = true;
		callback(null, result);
	};
	var reject = function(err) {
		if (callbackCalled) {
			return;
		}
		callbackCalled = true;
		callback(err, null);
	};

	var newEnv = generatePatchedEnv(options.env || process.env, IN_PORT, OUT_PORT);
	var childProcess = cp.spawn(modulePath, args, {
		silent: true,
		cwd: options.cwd,
		env: newEnv,
		execArgv: options.execArgv
	});
	childProcess.once('error', function(err) {
		console.log(err);
		reject(err);
	});
	childProcess.once('exit', function(err) {
		console.log(err);
		reject(err);
	});
	resolve(childProcess);
}

var DEBUG = true;

function runJavaServer(javaHome) {
	return new Promise(function(resolve, reject) {
		var child = javaHome + '/jre/bin/java'; // 'C:/devops/git/java-language-server/org.jboss.tools.vscode.product/target/products/languageServer.product/win32/win32/x86_64/eclipse';
		var params = [];
		var workspacePath = path.resolve(__dirname, "../server/tmp_ws");
		rimraf(workspacePath, function(error) {
			//TODO handle error
			if (DEBUG) {
				params.push('-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=1044');
			}
			params.push("-Dlog.level=ALL");
			params.push('-Declipse.application=org.jboss.tools.vscode.java.id1');
			params.push('-Dosgi.bundles.defaultStartLevel=4');
			params.push('-Declipse.product=org.jboss.tools.vscode.java.product');
			if (DEBUG) {
				params.push('-Dlog.protocol=true');
			}

			var pluginsFolder = path.resolve(__dirname, '../server/plugins');
			return fs.readdirAsync(pluginsFolder).then(function(files) {
				console.log(files);
				if (Array.isArray(files) && files.length !== 0) {
					for (var i = 0, length = files.length; i < length; i++) {
						var file = files[i];
						var indexOf = file.indexOf('org.eclipse.equinox.launcher_');
						if (indexOf !== -1) {
							params.push('-jar');
							console.log(file);
							params.push(path.resolve(__dirname, '../server/plugins/' + file));
				
							//select configuration directory according to OS
							var configDir = 'config_win';
							if (process.platform === 'darwin') {
								configDir = 'config_mac';
							} else if (process.platform === 'linux') {
								configDir = 'config_linux';
							}
							params.push('-configuration');
							params.push(path.resolve(__dirname, '../server', configDir));
							params.push('-data');
							params.push(workspacePath);

							return fork(child, params, {}, function(err, result) {
								if (err) reject(err);
								if (result) resolve(result);
							});
						}
					}
				}
			});
		});
	});
}
var CONTENT_LENGTH = 'Content-Length: ';
var CONTENT_LENGTH_SIZE = CONTENT_LENGTH.length;

function fixURI(p, workspaceUrl) {
	if (Array.isArray(p)) {
		p.forEach(function(element) {
			fixURI(element, workspaceUrl);
		});
	}
	if (p.uri) {
		var s = p.uri.slice(workspaceUrl.length);
		p.uri = api.join('/file', s.charAt(0) === '/' ? s.slice(1) : s);
	}
}

var remainingData;
var ready = false;

function parseMessage(data, workspaceUrl, sock) {
	try {
		var dataContents = data.toString('utf-8');
		if (remainingData) {
			dataContents = remainingData + dataContents;
		}
		var offset = -1;
		var headerIndex = -1;
		loop: while ((headerIndex = dataContents.indexOf(CONTENT_LENGTH, offset)) !== -1) {
			// this is an known header
			var headerSizeIndex = dataContents.indexOf('\r\n\r\n', headerIndex + CONTENT_LENGTH_SIZE, 'utf-8');
			if (headerSizeIndex !== -1) {
				var messageSize = Number(dataContents.slice(headerIndex + CONTENT_LENGTH_SIZE, headerSizeIndex));
				if (messageSize + headerSizeIndex >= dataContents.length) {
					// not enough data
					offset = headerIndex;
					break loop;
				}
				offset = headerSizeIndex + 4 + messageSize;
				var message = Object.create(null);
				message.headers = {
					'Content-Length': messageSize
				};
				// enough data to get the message contents
				var contents = dataContents.slice(headerSizeIndex + 4, headerSizeIndex + 4 + messageSize);
				var json = null;
				try {
					json = JSON.parse(contents);
				} catch(e) {
					console.log(e);
				}
				message.content = json;
				if (json) {
					if (json.params) {
						fixURI(json.params, workspaceUrl);
					}
					if (json.result) {
						fixURI(json.result, workspaceUrl);
					}
				}
				if (sock) {
					// detect that the server is ready
//					{"method":"language/status","params":{"type":"Started","message":"Ready"},"jsonrpc":"2.0"}
					if (!ready
							&& json.method === "language/status"
							&& json.params
							&& json.params.type === "Started"
							&& json.params.message === "Ready") {
						ready = true;
					}
					console.log(contents);
					sock.emit('data', json);
				}
			} else {
				offset = headerIndex;
				break loop;
			}
		}
		if (offset === -1) {
			remainingData = dataContents;
		} else if (offset < dataContents.length) {
			remainingData = dataContents.slice(offset, dataContents.length);
		} else {
			remainingData = null;
		}
		//console.log('remaining data: >>>' + remainingData + '<<<');
	} catch (err) {
		console.log(err);
	}
}

exports.install = function(options) {
	var io = options.io;
	if (!io) {
		throw new Error('missing options.io');
	}
	var workspaceUrl = "file:///" + options.workspaceDir.replace(/\\/g, "/");
	
	var javaHome = process.env["JAVA_HOME"];
	if (!javaHome) {
		throw new Error('JAVA_HOME needs to be set');
	}

	io.of('/languageServer').on('connection', function(sock) {
		sock.on('start', /* @callback */ function(cwd) {
			var receiveFromServer = net.createServer({}, function(stream) {
				console.log('receiveFromServer socket connected');
				stream.on('data', function(data) {
					parseMessage(data, workspaceUrl, sock);
				});
				stream.on('error', function(err) {
					console.log('receiveFromServer stream error: ' + err.toString());
				});
				stream.on('end', function() {
					console.log('receiveFromServer disconnected');
				});
			});
			receiveFromServer.listen(IN_PORT, null, null, function() {
				console.log("Listening to lsp server replies");
			});
			receiveFromServer.on('error', function(err) {
				console.log('receiveFromServer error: ' + err.toString());
			});
			receiveFromServer.on('end', function() {
				console.log('Disconnected receiveFromServer');
			});

			var startup = true;
			var sendToServer = net.createServer({}, function(stream) {
				console.log('sendToServer socket connected');

				sock.on('data', function(data) {
					var textDocument = data.params && data.params.textDocument && data.params.textDocument;
					if (textDocument && textDocument.uri) {
						textDocument.uri = workspaceUrl + textDocument.uri.replace(/^\/file/, '');
					}
					var s = JSON.stringify(data);
					if (!ready) {
						// check if this is the initialization message if not skip it
						if (data.method !== "initialize" && data.method !== "textDocument/didOpen") {
							return;
						}
					}
					console.log('data sent : ' + s);
					stream.write("Content-Length: " + s.length + "\r\n\r\n" + s);
				});
				stream.on('error', function(err) {
					console.log('sendToServer stream error: ' + err.toString());
				});
				stream.on('end', function() {
					console.log('sendToServer stream disconnected');
				});
				if (sock && startup) {
					startup = false;
					sock.emit('ready',
						JSON.stringify({
							workspaceDir: options.workspaceDir,
							processId: process.pid
						}));
				}

			});
			sendToServer.listen(OUT_PORT, null, null, function() {
				console.log("sendToServer socket is listening");
			});
			sendToServer.on('error', function(err) {
				console.log('sendToServer socket error: ' + err.toString());
			});
			sendToServer.on('end', function() {
				console.log('Disconnected sendToServer');
			});
			var serverClosed = false;
			var closeServer = function () {
				if (serverClosed) {
					return;
				}
				serverClosed = true;
				receiveFromServer.close();
				sendToServer.close();
			};
			runJavaServer(javaHome).then(function(child) {
				child.on('error', function(err) {
					closeServer();
					console.log('java server process error: ' + err.toString());
				});
				child.once('error', function(err) {
					closeServer();
					console.log(err);
				});
				child.once('exit', function() {
					closeServer();
				});
				sock.on('disconnect', function() {
					if (child.connected) {
						child.disconnect();
					} else {
						child.kill();
					}
					sock = null;
					remainingData = null;
					ready = false;
				});
			});
		});
	});
};

exports.uninstall = function() {};