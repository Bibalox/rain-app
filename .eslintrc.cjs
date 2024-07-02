/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/allowImportingTsExtensions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'no-console': 'off',
    'no-extend-native': [
      'error',
      {
        'exceptions': [
          'Array',
          'Object'
        ]
      }
    ],
    'no-irregular-whitespace': [
      'off'
    ]
    ,
    'no-new': 0,
    'quotes': [
      'error',
      'single'
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case'
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': { 'max': 2 },
        'multiline': { 'max': 2 }
      }
    ],
    'vue/html-self-closing': 0,
    'vue/no-v-html': 'off'
  }
}