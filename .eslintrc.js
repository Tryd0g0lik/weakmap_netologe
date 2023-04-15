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
	},
	extends: [
		"airbnb-base",
		"eslint:recommended",
		{ plugin: "import/recommended" }
	]
};
