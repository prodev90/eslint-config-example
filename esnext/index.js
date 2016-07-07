export default {
	env: {
		es6: true
	},

	parser: 'babel-eslint',

	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			experimentalObjectRestSpread: true
		}
	},

	extends: 'eslint:recommended',

	plugins: [
		'babel'
	],

	rules: {
		'array-callback-return': 2,
		'arrow-body-style': 2,
		'dot-notation': 2,
		'no-constant-condition': [ 2, {
			checkLoops: false
		} ],
		'no-duplicate-imports': 2,
		'no-empty': 2
		'no-empty-function': 2,
		'no-extra-semi': 2,
		'no-lonely-if': 2,
		'no-loop-func': 2,
		'no-self-assign': 2,
		'no-unexpected-multiline': 2,
		'no-unmodified-loop-condition': 2,
		'no-unneeded-ternary': [ 2, {
			'defaultAssignment': false
		} ],
		'no-unused-expressions': [ 2, {
			'allowTernary': true,
			'allowShortCircuit': true
		} ],
		'no-use-before-define': [ 2, 'nofunc' ],
		'no-var': 2,
		'object-shorthand': 2,
		'operator-assignment': 2,
		'prefer-arrow-callback': 2,
		'prefer-const': 2
	}
}