module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true,
    browser: true
  },
  globals: {
    Markdown: true
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended', 'eslint:recommended'],
  plugins: ['vue', 'html'],
  rules: {
    'no-unused-vars': 'off',
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     // argsIgnorePattern: '^h$',
    //     // varsIgnorePattern: '^h$'
    //     args: 'none'
    //   }
    // ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'vue/require-default-prop': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    'vue/comment-directive': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
