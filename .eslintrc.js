module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    'plugin:vue/strongly-recommended',
    "@vue/prettier",
    "@vue/typescript",
    "plugin:vue/recommended",
    "prettier"
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    "vue/max-attributes-per-line": 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
};
