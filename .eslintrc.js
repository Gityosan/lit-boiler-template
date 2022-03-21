export default {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:lit/recommended',
    'prettier'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  // required to lint *.vue files
  plugins: ['lit'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-sparse-arrays': 'off',
    'array-callback-return': 0,
    'import/no-named-as-default': 0,
    // lit settings
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-template-arrow': 'warn'
  }
}
