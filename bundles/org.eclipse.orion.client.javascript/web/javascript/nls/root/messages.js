/*******************************************************************************
 * @license
 * Copyright (c) 2014, 2017 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 ******************************************************************************/
/* eslint-env amd */
define({
	'pluginName': 'Orion JavaScript Tool Support',
	'pluginDescription': 'This plug-in provides JavaScript tools support for Orion, like editing, search, navigation, validation, and code completion.',
	'error': 'Error',
	'warning' : 'Warning',
	'ignore' : 'Ignore',
	'info': 'Info',
	'ternContentAssist' : 'Tern JavaScript content assist',
	'ternProjectAssist': 'Tern project file content assist',
	'emptyFileTemplateDoc': 'Create new default contents for the .tern-project file',
	'prefCodeStyle':'Code Style',
	'prefBestPractices':'Best Practices',
	'prefPotentialProblems':'Possible Errors',
	'sourceOutline' : 'Source Outline',
	'sourceOutlineTitle': 'JavaScript source outline',
	'astOutline' : 'AST Outline',
	'astOutlineTitle': 'JavaScript AST outline',
	'contentAssist' : 'JavaScript content assist',
	'eslintValidator' : 'JavaScript Validator',
	'missingCurly' : 'Statements not enclosed in braces:',
	'curlyFixName': 'Enclose statement in braces',
	'ignoreInFileFixName': 'Disable ${0}',
	'noCaller' : 'Discouraged \'arguments.caller\' or \'arguments.callee\' use:',
	'noCommaDangle' : 'Trailing commas in object expressions:',
	'noCondAssign' : 'Assignments in conditional expressions:',
	'noConsole' : 'Discouraged console use in browser code:',
	'noConstantCondition' : 'Constant as conditional expression:',
	'noRegexSpaces' : 'Multiple spaces in regular expressions:',
	'noReservedKeys' : 'Reserved words used as property keys:',
	'noReservedKeysFixName': 'Surround key with quotes',
	'noEqeqeq' : 'Discouraged \'==\' use:',
	"unknownRequire": "Unknown required library:",
	'noDebugger' : 'Discouraged \'debugger\' statement use:',
	'noDebuggerFixName': 'Remove statement',
	'noWith': 'Discouraged \'with\' statement use:',
	'noEval' : 'Discouraged \'eval()\' use:',
	'noImpliedEval' : 'Discouraged implied \'eval()\' use:',
	'noDupeKeys' : 'Duplicate object keys:',
	'noDupeKeysFixName': 'Rename key',
	'NoRedeclareFixName' : 'Rename variable',
	'noDuplicateCaseFixName' : 'Rename case',
	'removeDuplicateCaseFixName' : 'Remove case',
	'noIterator': 'Discouraged __iterator__ property use:',
	'noProto': 'Discouraged __proto__ property use:',
	'noUndefInit': 'Explicitly initializing variables to undefined:',
	'noundefinitFixName': 'Remove assignment',
	'useIsNaN' : 'NaN not compared with isNaN():',
	'useIsNanFixName': 'Use isNaN()',
	'missingDoc' : 'Missing JSDoc:',
	'missingDocFixName': 'Generate element JSDoc',
	'noUnreachable' : 'Unreachable code:',
	'noFallthrough' : 'Switch case fall-through:',
	'useBeforeDefine' : 'Member used before definition:',
	'noEmptyBlock' : 'Undocumented empty block:',
	'newParens' : 'Missing parentheses in constructor call:',
	'newparensFixName': 'Add parentheses',
	'noNewArray': 'Discouraged \'new Array()\':',
	'noNewArrayFixName': 'Convert to array literal',
	'noNewFunc': 'Discouraged \'new Function()\':',
	'noNewObject': 'Discouraged \'new Object()\':',
	'noNewWrappers': 'Discouraged wrapper objects:',
	'noNewWrappersLiteralFixName': 'Convert to literal',
	'noNewWrappersFixName': 'Remove \'new\' keyword',
	'noMixedSpacesAndTabs' : 'Mixed spaces and tabs:',
	'missingSemi' : 'Missing semicolons:',
	'missingSemiFineGrained' : 'Kinds:',
	'missingSemiOmitLastInOneLineBlock' : 'Omit the last semicolon in a one-line block:',
	'unusedVars' : 'Unused variables:',
	'varRedecl' : 'Variable re-declarations:',
	'varShadow': 'Variable shadowing:',
	'undefMember' : 'Undeclared global reference:',
	'undefExpression' : 'Undeclared function reference:',
	'unnecessarySemis' : 'Unnecessary semicolons:',
	'unusedParams' : 'Unused parameters:',
	'missingRequirejs': '\'requirejs\' plugin missing in AMD environment:',
	'unsupportedJSLint' : 'Unsupported environment directive:',
	'noThrowLiteral': 'Literal used in \'throw\':',
	'noselfassignFixName': 'Remove assignment',
	'noselfassignRenameFixName': 'Rename right hand variable',
	'missingNls': 'Non-externalized string literals (missing $NON-NLS$ tag):',
	'unnecessaryNls': 'Unnecessary $NON-NLS$ tags:',
	'generateDocName' : 'Generate Element Comment',
	'generateDocTooltip' : 'Generate a JSDoc-like comment for the selected JavaScript element',
	'renameElement' : 'Rename Element',
	'renameElementTooltip' : 'Rename the selected JavaScript element',
	'renameFailedTimedOut': 'Could not rename element - operation timed out',
	'openDeclName' : 'Open Declaration',
	'openDeclTooltip' : 'Open the declaration of the selected element',
	'openImplName' : 'Open Implementation',
	'openImplTooltip' : 'Open the implementation of the selected element',
	'noImplFound': 'No implementation was found',
	'implTimedOut': 'Could not compute implementation, the operation timed out',
	'workspaceRefsName': 'Workspace',
	'workspaceRefsTooltip': 'Show all references to the selection in the workspace',
	'projectRefsName': 'Project',
	'projectRefsTooltip': 'Show all references to the selection in the current project',
	'referencesMenuName': 'References',
	'referencesMenuTooltip': 'Show different kinds of references',
	'noDeclTimedOut': 'No declaration was found - operation timed out',
	'validTypeof': 'Invalid \'typeof\' comparison:',
	'noSparseArrays': 'Sparse array declarations:',
	'javascriptValidation': 'Javascript Validation',
	'jsHover': 'JavaScript Hover Provider',
	'removeExtraParensFixName': 'Remove gratuitous parentheses',
	'removeExtraSemiFixName': 'Remove extra semicolon',
	'addFallthroughCommentFixName': 'Add $FALLTHROUGH$ comment',
	'addEmptyCommentFixName': 'Comment empty block',
	'addESLintEnvFixName': 'Add to eslint-env directive',
	'addESLintGlobalFixName': 'Add to globals directive',
	'openDefinition': 'Go to definition...',
	'removeUnusedParamsFixName': 'Remove parameter',
	'commentCallbackFixName': 'Add @callback to function',
	'eqeqeqFixName': 'Update operator',
	'unreachableFixName': 'Remove unreachable code',
	'sparseArrayFixName': 'Convert to normal array',
	'semiFixName': 'Add missing semicolon',
	'unknownRequirePluginFixName': 'Update project settings',
	'radix': 'Missing radix parameter to parseInt():',
	'radixFixName': 'Add default radix',
	'unusedVarsUnusedFixName': 'Remove unused variable',
	'unreadVarsFixName': 'Remove unread variable',
	'unusedFuncDeclFixName': 'Remove unused function',
	'noCommaDangleFixName': 'Remove extra \',\'',
	'addBBreakFixName': 'Add break statement',
	'noShadowGlobals': 'Global shadowing:',
	'noThrowLiteralFixName': 'Change to Error' ,
	'missingNlsFixName': 'Add missing $NON-NLS$ tag',
	'unnecessaryNlsFixName': 'Remove unnecessary $NON-NLS$ tag',
	'funcProposalDescription': ' - The name of the function',
	'funcParamProposalDescription': ' - Function parameter',
	'eslintRuleProposalDescripton': ' - ESLint rule',
	'eslintEnvProposalDescription': ' - ESLint environment name',
	'onlineDocumentationProposalEntry': '\n\n[Online documentation](${0})',
	'keywordHoverProposal': 'ECMAScript reserved keyword',
	'reloadPluginCmd': 'Reload',
	'reloadPluginCmdTooltip'	: 'Reload plug-in',
	'reloadAllPluginsCmd': 'Reload All',
	'reloadAllPluginsCmdTooltip': 'Reload all plug-ins',
	'templateHoverHeader': 'Template source code:\n\n',
	'templateAssistHeader': 'Templates',
	'keywordAssistHeader': 'Keywords',
	'ternPlugins': 'Tern Plug-ins',
	'noTernPluginsAvailable': 'No Tern plug-ins are currently loaded. This may be because you have not yet activated content assist in a JavaScript file. Tern plug-ins provide type information and code templates for JavaScript.',
	'noDeclFound': 'Could not find declaration',
	'declFoundInIndex': 'Declaration was not found in source, it was found in the \'${0}\' index.',
	'implFoundInIndex': 'Implementation is not in your workspace. Found in \'${0}\' index.',
	'deprecatedHoverTitle': 'Deprecated.', // the in-line title for deprecated memebers. The word is used alone in a sentence with no further punctuation
	'parametersHoverTitle': 'Parameters:', // the in-line title for the parameters section. The word is used alone in a sentence with no further punctuation
	'returnsHoverTitle': 'Returns:', // the in-line title for the returns section. The word is used alone in a sentence with no further punctuation
	'throwsHoverTitle': 'Throws:', // the in-line title for the throws section. The word is used alone in a sentence with no further punctuation
	'callbackHoverTitle': 'Callback:', // the in-line title for the callback section. The word is used alone in a sentence with no further punctuation
	'callbackText': 'This function is used as a callback',
	'sinceHoverTitle': 'Since:', // the in-line title for the since section. The word is used alone in a sentence with no further punctuation
	'seeAlsoHoverTitle': 'See Also:', // the in-line title for the since section. The word is used alone in a sentence with no further punctuation
	'openFileForTitle': 'Open file for', // the in-line title for the 'open file hover'. The sentence is used as-is and is followed only by a OS file path
	'failedToReadFile': 'Failed to read file: ${0}',
	'badInlineRename': 'In-line rename is only available for local variables and declarations.',
	'failedRename': 'In-line rename failed: ${0}',
	'declDisplayName': '${0} (start: ${1}, end: ${2})', // ${0} is the fully qualified file path of the decl, ${1} and ${2} are the numerical start and end offsets of the decl, respectively
	'declPotentialHeader': '**Potential matches:**\n',
	'typeofOptions': 'Typeof Options',
	'NoCondAssignFixName' : 'Surround with parenthesis',
	'no-void' : 'Disallow use of the void operator:',
	'no-extra-bind' : 'Disallow unnecessary calls to \'.bind()\':',
	'NoExtraBindFixName' : 'Remove \'bind\' call',
	'no-implicit-coercion' : 'Disallow the type conversion with shorter notations:',
	'no-implicit-coercion-boolean' : 'Report type conversion to boolean:',
	'no-implicit-coercion-number' : 'Report type conversion to number:',
	'no-implicit-coercion-string' : 'Report type conversion to string:',
	'no-extend-native' : 'Disallow extending of native objects:',
	'no-extend-native-exceptions' : 'Exceptions:',
	'no-lone-blocks' : 'Disallow unnecessary nested blocks:',
	'quotes' : 'Enforce quote style:',
	'quotesKind' : 'Kind of quotes:',
	'quotesAvoidEscape' : 'Avoid escaped quotes:',
	'quotesAllowTemplateLiterals' : 'Allow template literals:',
	'singleQuote' : 'single quote (\')',
	'doubleQuote' : 'double quote (")',
	'backtickQuote' : 'backtick (`)',
	'quoteFixName' : 'Fix quotes',
	'yoda' : 'Require or disallow Yoda conditions:',
	'always' : 'Always',
	'never' : 'Never',
	'yodaKind' : 'Kinds:',
	'yodaExceptRange' : 'Except for range comparisons:',
	'yodaOnlyEquality' : 'Check only for \'==\' and \'===\' operators:',
	'no-param-reassign' : 'Disallow reassignment of function parameters:',
	'no-param-reassign-props' : 'Disallow for parameter properties:',
	'no-native-reassign' : 'Disallow reassignment of native objects',
	'no-native-reassign-exceptions' : 'Exceptions:',
	'no-unused-expressions' : 'Disallow unused expressions:',
	'no-unused-expressions-allowShortCircuit' : 'Allow to use short circuit evaluations:',
	'no-unused-expressions-allowTernary' : 'Allow to use ternary operators:',
	'noUnusedExpressionsFixName' : 'Remove unused expressions',
	'no-invalid-this' : 'Disallow this keywords outside of classes or class-like objects:',
	'noTrailingSpaces' : 'Disallow trailing whitespace:',
	'noTrailingSpacesSkipBlankLines' : 'Skip empty lines:',
	'noTrailingSpacesFixName' : 'Remove trailing spaces',
	'no-irregular-whitespace' : 'Disallow irregular whitespace:',
	'no-irregular-whitespace-skipStrings' : 'Skip strings:',
	'no-irregular-whitespace-skipComments' : 'Skip comments:',
	'no-irregular-whitespace-skipRegexps' : 'Skip regular expressions:',
	'no-irregular-whitespace-skipTemplates' : 'Skip templates:',

	//All refs
	'functionDecls': 'Function Declarations',
	'functionCalls': 'Function Calls',
	'propAccess': 'Property Access',
	'propWrite': 'Property Write',
	'varAccess': 'Variable Access',
	'varWrite': 'Variable Write',
	'varDecls': 'Variable Declarations',
	'regex': 'Regular Expressions',
	'strings': 'Strings',
	'blockComments': 'Block Comments',
	'lineComments': 'Line Comments',
	'partial': 'Partial Matches',
	'uncategorized': 'Uncategorized',
	'parseErrors': 'Parse Errors',
	'noFileContents': 'Could not compute references: failed to compute file text content',
	'noFileMeta': 'Could not compute references: failed to compute file metadata',
	'cannotComputeRefs': 'Cannot compute references: ${0}',
	'notAnIdentifier': 'Cannot compute references at the selected location: Location is not an identifier',
	'notHtmlOffset': 'Not a valid offset in HTML',
	'allProjectRefs': 'Finding all project references...',
	'allWorkspaceRefs': 'Finding all workspace references...',
	'refsFoundIn': 'References found in file: \'${0}\' (${1}/${2})',
	'addToTernCommand': 'Add to .tern-project',
	'addToTernCommandTooltip': 'The JavaScript tooling will always load the contents of this file to Tern',
	'accessor-pairs' : 'Getter and setter accessors not in pairs:',
	'noConstAssign' : 'Disallow modifying variables that are declared using const:',
	'no-control-regex' : 'Disallow control characters in regular expressions:',
	'no-duplicate-case' : 'Duplicate case:',
	'no-empty-character-class' : 'Disallow empty character classes:',
	'no-extra-boolean-cast' : 'Discourage redundant double negation:',
	'no-extra-parens' : 'Discourage redundant parentheses:',
	'no-extra-parens-kinds' : 'Kinds:',
	'no-extra-parens-conditionalAssign' : 'Allows extra parentheses around assignments in conditional test expressions:',
	'no-extra-parens-returnAssign' : 'Allows extra parentheses around assignments in return statements:',
	'no-extra-parens-nestedBinaryExpressions' : 'Allows extra parentheses in nested binary expressions:',
	'no-invalid-regexp' : 'Invalid regular expressions:',
	'no-invalid-regexp-flags' : 'List of allowed flags:',
	'no-negated-in-lhs' : 'Disallow negated left operand of in operator:',
	'no-obj-calls' : 'Disallow global object as function calls:',
	'no-eq-null' : 'Disallow null comparisons:',
	'noeqnullFixName': 'Update operator',
	'no-else-return' : 'Unnecessary else after return:',
	'no-empty-label' : 'No empty labels:',
	'no-self-compare' : 'Disallow self compare:',
	'no-self-assign' : 'Disallow self assignment:',
	'noShadowFixName' : 'Rename in scope',
	'type-checked-consistent-return' : 'Discouraged inconsistent returns:',
	'check-tern-plugin' : 'Missing .tern-project plugins entry for environment directive:',
	'checkTernPluginFixName' : 'Add plugin to .tern-project file',
	'checkTernLibFixName' : 'Add library to .tern-project file',
	'forbiddenExportImportFixName' : 'Set sourceType to module',
	'noElseReturnFixName' : 'Remove unnecessary else',
	'noImplicitCoercionFixName' : 'Remove implicit coercion',
	
	//Tern Plugins
	'commonjsPluginName': 'CommonJS',
	'commonjsPluginDescription': 'Plug-in that handles CommonJS-style dependency resolution.',
	'ternDocPluginName': 'Doc Comments',
	'ternDocPluginDescription': 'Tern plug-in to parse and use JSDoc-like comments for inferencing',
	'orionAMQPPluginName': 'Orion AMQP',
	'orionAMQPPluginDescription': 'Plug-in that contributes type information and code templates for AMQP.',
	'orionAngularPluginName': 'AngularJS',
	'orionAngularPluginDescription': 'Plug-in that contributes type information and code templates for AngularJS.',
	'orionComponentPluginName': 'ComponentJS',
	'orionComponentPluginDescription': 'Plug-in that contributes type information and code templates for ComponentJS.',
	'orionExpressPluginName': 'Orion ExpressJS',
	'orionExpressPluginDescription': 'Plug-in that contributes type information and code templates for ExpressJS.',
	'orionESModulesPluginName': 'Orion ES_Modules',
	'orionESModulesPluginDescription': 'Plug-in that contributes type information and code templates for ES Modules.',
	'orionMongoDBPluginName': 'Orion MongoDB',
	'orionMongoDBPluginDescription': 'Plug-in that contributes type information and code templates for MongoDB.',
	'orionMySQLPluginName': 'Orion MySQL',
	'orionMySQLPluginDescription': 'Plug-in that contributes type information and code templates for MySQL.',
	'orionNodePluginName': 'Orion Node.js',
	'orionNodePluginDescription': 'Plug-in that contributes type information and code templates for Node.js.',
	'orionPostgresPluginName': 'Orion PostgreSQL',
	'orionPostgresPluginDescription': 'Plug-in that contributes type information and code templates for PostgreSQL.',
	'orionRequirePluginName': 'Orion RequireJS',
	'orionRequirePluginDescription': 'Plug-in that contributes type information and code templates for RequireJS.',
	'orionRedisPluginName': 'Orion Redis',
	'orionRedisPluginDescription': 'Plug-in that contributes type information and code templates for Redis.',
	'ternPluginsPluginName': 'Orion Tern Plug-in Support',
	'ternPluginsPluginDescription': 'Plug-in that allows Orion to inspect and modify plug-ins running in Tern.',
	'occurrencesPluginName': 'Orion Occurrences Support',
	'occurrencesPluginDescription': 'Plug-in that allows Orion to highlight the occurrenes of an identifier in a file',
	'openImplPluginName': 'Orion Open Implementation Support',
	'openImplPluginDescription': 'Plug-in that allows Orion to try to find implementation locations of elements rather than simple declarations',
	'htmlDepPluginName': 'Orion HTML Dependency Analysis',
	'htmlDepPluginDescription': 'Resolves script block and script tag dependencies',
	'findTypesName': 'Orion References Support',
	'findTypesDescription': 'Plug-in that provides expanded type-finding support in Orion',
	'eslintPluginName': 'ESLint plugin for Tern',
	'eslintPluginDescription': 'Provides ESLint linting for Tern',
	'jsdocPluginName': 'JSDoc types and completion support',
	'jsdocPluginDescription': 'Provides auto-complete and type information for JSDoc',
	'outlinerPluginName': 'JavaScript outlining',
	'outlinerPluginDescription': 'Provides JavaScript outlining',
	"fixesPluginName": "JavaScript quick fixes",
	"fixesPluginDescription": "Provides quick fixes for Orion ESLint problems",
	'astPluginName': 'AST (acorn) plugin for Tern',
	'astPluginDescription': 'Provides AST (acorn) for Tern',
	'templatesPlugin': 'Orion code templates',
	'templatesPluginDescription': 'Provides a variety of code templates for JavaScript in Orion.',
	'beautifierPluginName' : 'JSBeautify plugin for Tern',
	'beautifierPluginDescription' : 'Provides JS formatting for Tern',
	'resolverPluginName' : 'Resolver plugin for Tern',
	'resolverPluginDescription' : 'Resolves Orion file paths for other Tern plugins.',
	
	// Tern indexes
	'browser': 'Browser global variables.',
	'node': 'Node.js global variables and Node.js scoping.',
	'commonjs': 'CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).',
	'worker': 'Web workers global variables.',
	'amd': 'Defines require() and define() as global variables as per the amd spec.',
	'mocha': 'Adds all of the Mocha testing global variables.',
	'jasmine': 'Adds all of the Jasmine testing global variables for version 1.3 and 2.0.',
	'jest': 'Jest global variables.',
	'phantomjs': 'PhantomJS global variables.',
	'protractor': 'Protractor global variables.',
	'qunit': 'QUnit global variables.',
	'jquery': 'jQuery global variables.',
	'prototypejs': 'Prototype.js global variables.',
	'shelljs': 'ShellJS global variables.',
	'meteor': 'Meteor global variables.',
	'mongo': 'MongoDB global variables.',
	'applescript': 'AppleScript global variables.',
	'nashorn': 'Java 8 Nashorn global variables.',
	'serviceworker': 'Service Worker global variables.',
	'embertest': 'Ember test helper globals.',
	'webextensions': 'WebExtensions globals.',
	'es6': 'Enable all ECMAScript 6 features except for modules.',
	
	// JSDoc types
	'jsDocEmptyObjDesc': ' - Empty object',
	'jsDocEmptyObjDoc': 'Represents an object wrapper with no known properties.',
	'jsDocObjPropDesc': ' - Object with a specific property',
	'jsDocObjPropDoc': 'Represents an object wrapper with one or more known properties.',
	'jsDocAnyTypeDesc': ' - No type information',
	'jsDocAnyTypeDoc': 'Represents that no type information is known. The type is described as the \'any\' type.',
	
	// JS formatting settings
	'javascriptFormatter' : 'Javascript Formatter',
	'javascriptFormattingSettings' : 'Formatting Settings for Javascript',
	'javascriptFormatting' : 'Javascript Formatting',
	'js_indent_size' : 'Indention size:',
	'js_indent_char' : 'Indentation character:',
	'js_eol' : 'Character(s) to use as line terminators:',
	'js_end_with_newline' : 'End ouput with newline:',
	'indentation_unix' : 'Unix',
	'indentation_mac' : 'Mac',
	'indentation_windows' : 'Windows',
	'indentation_space' : 'space',
	'indentation_tab' : 'tab',
	'jsFormattingSettings' : 'Formatting Settings for Javascript',
	'indent_level': 'Initial indentation level:',
	'before_newline' : 'Before new line',
	'after_newline' : 'After new line',
	'preserve_newline' : 'Preserve new line',
	'collapse_preserve_inline' : 'Collapse Preserve inline',
	'collapse' : 'Collapse',
	'expand' : 'Expand',
	'end_expand' : 'End expand',
	'none' : 'None',
	'js_preserve_newlines' : 'Preserve line-breaks:',
	'js_max_preserve_newlines' : 'Number of line-breaks to be preserved in one chunk:',
	'space_in_paren' : 'Add padding space within paren:',
	'space_in_empty_paren' : 'Add padding space in empty paren:',
	'space_after_anon_function' : "Add a space before an anonymous function's parens",
	'js_brace_style' : 'Brace Style:',
	'break_chained_methods' : 'Break chained method calls across subsequent lines:',
	'keep_array_indentation' : 'Preserve array indentation:',
	'space_before_conditional' : 'Space before condition:',
	'unescape_strings' : 'Decode printable characters encoded in xNN notation:',
	'js_wrap_line_length' : 'Wrap lines at next opportunity after N characters (0 for unlimited):',
	'e4x' : 'Pass E4X xml literal through untouched:',
	'comma_first' : 'Put commas at the beginning of new line instead of end:',
	'operator_position' : 'Position for operator:',

	// Other messages
	'unknownError': 'An unknown error occurred.',
	'failedDeleteRequest': 'Failed to delete file from Tern: ${0}',
	'failedReadRequest': 'Failed to read file into Tern: ${0}',
	'failedToComputeProposals': 'Failed to compute proposals',
	'failedToComputeProposalsNoServer': 'Failed to compute proposals, server not started',
	'failedToComputeDecl': 'Failed to compute declaration',
	'failedToComputeDeclNoServer': 'Failed to compute declaration, server not started',
	'failedToComputeImpl': 'Failed to compute implementation',
	'failedToComputeImplNoServer': 'Failed to compute implementation, server not started',
	'failedToComputeDoc': 'Failed to compute documentation',
	'failedToComputeDocNoServer': 'Failed to compute documentation, server not started',
	'failedToComputeOccurrences': 'Failed to compute occurrences',
	'failedToComputeOccurrencesNoServer': 'failed to compute occurrences, server not started',
	'failedGetInstalledPlugins': 'Failed to get installed plug-ins',
	'failedGetInstalledPluginsNoServer': 'Failed to get installed plug-ins, server not started',
	'failedGetInstalledDefs': 'Failed to get installed Tern definitions',
	'failedGetInstalledDefsNoServer': 'Failed to get installed Tern definitions, server not started',
	'failedInstallPlugins': 'Failed to install plug-ins',
	'failedInstallPluginsNoServer': 'Failed to install plug-ins, server not started',
	'failedRemovePlugins': 'Failed to remove plug-ins',
	'failedRemovePluginsNoServer': 'Failed to remove plug-ins, server not started',
	'failedEnablementPlugins': 'Failed to set enablement of plug-ins',
	'failedEnablementPluginsNoServer': 'Failed to set enablement of plug-ins, server not started',
	'failedGetEnvs': 'Failed to get contributed environments',
	'failedGetEnvsNoServer': 'Failed to get contributed environments, server not started',
	'failedRenameTern': 'Failed to compute rename changes',
	'failedRenameNoServer': 'Failed to compute rename changes, server not started',
	'failedRefs': 'Failed to find references',
	'failedRefsNoServer': 'failed to find references - server not started',
	'failedType': 'Failed to find type',
	'failedQuickfixesNoServer': 'Failed to compute quick fixes, server not started',
	'unknownRequest': 'The request \'${0}\' is unknown',
	'serverNotStarted': 'The server has not been started. Request: \'${0}\'',
	'failedToComputeProblems': 'Failed to compute ESLint problems/markers',
	'failedToComputeOutline': 'Failed to compute outline',
	'failedToFormat' : 'Failed to format',
	'failedToFormatNoServer' : 'Failed to format, server not started',
	
	//Templates
	'eslintRuleEnableDisable': 'Enable or disable ESLint rule using the ```ruleid:0/1/2``` form.\n\nExample use:\n\n>```/* eslint semi:1, no-console:0, no-redeclare:2 */```',
	'eslintEnvDirective': 'Specify which environments are used in this JavaScript file.\n\nExample use:\n\n>```/* eslint-env amd, node, broswer */```',
	'eslintRuleEnable': 'Enable a given set of ESLint rules.\n\nExample use:\n\n>```/* eslint-enable semi, no-console, no-redeclare */```',
	'eslintRuleDisable': 'Disable a given set of ESLint rules.\n\nExample use:\n\n>```/* eslint-disable semi, no-console, no-redeclare */```',
	'arrowFunc': 'Create a simple arrow function expression.',
	'arrowFuncObj': 'Create a simple arrow function expression that returns an object.',
	'importSimpleDefault': 'Create an import statement that imports the default value from a module.',
	'importStarAs': 'Create an import statement that imports an entire module as a given name.',
	'importMultiMember': 'Create an import statement that imports multiple named members.',
	'importSideEffects': 'Create an import statment that imports an entire module for side effects only',
	'letSimple': 'Create a new let statement.',
	'exportSimple': 'Create a new export statement.',
	'exportDefault': 'Create a new export statement that exports the value as the default for the module.',
	'forOf': 'Create a new for..of statement.',
	'constSimple': 'Create a new const statement.',
	'funcGenerator': 'Create a new generator function.',
	'yieldSimple': 'Create a new yield statement.',
	'yieldSimpleReturn': 'Create a new yield statement that returns the optional value passed to the generator\'s next() method.',
	'yieldDelegate': 'Create a new yield* statement that is used to delegate to another generator.',
	'ifSimple': 'Create a new if statement.',
	'ifElseSimple': 'Create a new if..else statement.',
	'forArray': 'Create a new for loop that iterates over an array.',
	'forArrayVar': 'Create a new for loop that iterates over an array, with a local variable.',
	'forInSimple': 'Create a for..in loop that iterates the properties of an object.',
	'whileSimple': 'Create a while loop.',
	'doSimple': 'Create a do..while loop.',
	'switchSimple': 'Create a switch statement with a case and a default case.',
	'tryCatch': 'Create a new try..catch statement.',
	'tryCatchFinally': 'Create a new try..catch..finally statement.',
	'typeofSimple': 'Create a new typeof expression.',
	'instanceofSimple': 'Create a new instanceof expression.',
	'withSimple': 'Create a new with statement.\n\n```Use of the with statement is not recommended, as it may be the source of confusing bugs and compatibility issues```.',
	'functionSimple': 'Create a new function declaration.',
	'functionProp': 'Create a new object property that is set to a function expression.',
	'defineSimple': 'Create a new AMD define function call.',
	'nlsSimple': 'Create a new //$NON-NLS-$ comment.',
	'logSimple': 'Create a new console.log expression.\n\n```This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.```',
	'requireSimple': 'Create a Node.js require statement and assign it to a local variable.',
	'caseSimple': 'Create a new case statement.',
	'classSimple': 'Create a new JavaScript class that extends another class and has a constructor.',
	'classExpr': 'Create a new JavaScript class expression that extends another class and has a constructor.',
	'amqpRequire':'Create a new Node.js require statement to import the AMQP framework.',
	'amqpConnection': 'Create a new AMQP connection.',
	'amqpOn': 'Create a new AMQP connection on call.',
	'amqpQueue': 'Create a new AMQP connection queue.',
	'amqpExchange': 'Create a new AMQP connection exchange.',
	'expressRequire': 'Create a new Node.js require statement to import Express.',
	'expressInstance': 'Create a new Express app instance.',
	'expressGet': 'Create a new Express app.get call.',
	'expressSet': 'Create a new Express app.set call.',
	'expressUse': 'Create a new Express app.use call.',
	'expressEngine': 'Create a new Express app.engine call.',
	'expressParam': 'Create a new Express app.param call.',
	'expressUseError': 'create a new Express app.use call with error handling.',
	'mongodbRequire': 'Create a Node.js require statement to import MongoDB.',
	'mongodbClient': 'Create a new MongoDB client.',
	'mongodbOpen': 'Create a new MongoDB client and open a connection.',
	'mongodbConnect': 'Connect to an existing MongoDB database.',
	'mongodbConnectCF': 'Connect to an existing MongoDB database using Cloud Foundry.',
	'mongodbCollection': 'Create a MongoDB database collection.',
	'mongodbStrictCollection': 'Create a MongoDB database strict collection.',
	'mysqlRequire': 'Create a Node.js require statement to import MySQL DB.',
	'mysqlConnection': 'Create a new MySQL DB connection.',
	'mysqlQuery': 'Create a new MySQL DB query statement.',
	'postgresRequire': 'Create a Node.js require statement to import Postgres DB.',
	'postgresClient': 'Create a new Postgres DB client.',
	'postgresConnect': 'Create a new Postgres DB client and connect.',
	'postgresQuery': 'Create a new Postgres DB query statement.',
	'redisRequire': 'Create a Node.js require statement to import Redis.',
	'redisClient': 'Create a new Redis client.',
	'redisConnect': 'Create a new Redis client and connect.',
	'redisSet': 'Create a new Redis client set call.',
	'redisGet': 'Create a new Redis client get call.',
	'redisOn': 'Create a new Redis client event handler.'
});
