const path = require('path');
module.exports = {
	extends: [
		'airbnb',
		'airbnb/hooks',
		'prettier',
		'plugin:promise/recommended',

		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'prettier/react', // disables react-specific linting rules that conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		//'plugin:jsx-a11y/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: path.resolve(__dirname, './tsconfig.json'),
		tsconfigRootDir: __dirname,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: [
		'@typescript-eslint',
		'import',
		'promise',
		//'jsx-a11y',
		'react',
		'react-hooks',
		'graphql',
		// "prettier", // commented as we don't want to run prettier through eslint because performance
	],
	rules: {
		'graphql/template-strings': [
			'error',
			{
				env: 'literal',
				schemaJson: require('./schema.json'),
				tagName: 'graphql',
			},
		],
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'brace-style': [2, '1tbs', { allowSingleLine: false }],
		semi: ['error', 'always'],
		curly: 'error',
		'one-var': ['error', 'never'],
		'newline-after-var': ['error', 'never'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'never', prev: ['const', 'let'], next: ['const', 'let'] },
		],
		//'linebreak-style': ['error', 'windows'],
		'prefer-template': ['error'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-var': 'error',
		eqeqeq: ['error', 'smart'],
		'no-duplicate-imports': 'error',
		'prefer-const': 'error',
		'arrow-body-style': 'error',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'], //"internal"],
				'newlines-between': 'always',
			},
		],
		'import/no-extraneous-dependencies': 'error',
		// "sort-keys": "error",
		'no-restricted-imports': ['error', 'rxjs', 'lodash'],
		'no-duplicate-case': 'error',
		'no-template-curly-in-string': 'error',
		'no-return-await': 'error',
		'no-fallthrough': 'error',
		'prefer-object-spread': 'error',

		'react/prop-types': 'off',
		'react/display-name': 'off', // ["error", { "ignoreTranspilerName": true }],

		'no-nested-ternary': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/camelcase': 'off',
		'react/jsx-filename-extension': 'off', // tsx
		'react/jsx-props-no-spreading': 'off',
		'react/destructuring-assignment': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/label-has-associated-control': 'off',

		'import/extensions': ['error', 'never'],
		'react/no-unescaped-entities': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
