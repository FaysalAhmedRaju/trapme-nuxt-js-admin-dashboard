module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/vue',
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
