const options = {
	env: {
		browser: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.svelte'],
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: true,
		tsconfigRootDir: __dirname
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.svelte'],
				tsconfigRootDir: __dirname
			}
		}
	],
	plugins: ['@typescript-eslint', 'eslint-plugin-svelte'],
	root: true,
	rules: {
		'svelte/block-lang': [2, {
			script: ['ts']
		}]
	},
	reportUnusedDisableDirectives: true
};

module.exports = options;
