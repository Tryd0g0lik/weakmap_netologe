module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'airbnb-base',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		"no-tabs": 0,
		"linebreak-style": 0,
		"indent": 0,
		"no-undef": 0,
		"no-restricted-syntax": 0,
		"quotes": ["error", "double", { "avoidEscape": true },],
		"no-unused-vars": ["error", { "vars": "all" }],

	},
};
