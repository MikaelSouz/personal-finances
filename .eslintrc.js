module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'multiline-ternary': 'off',
    'no-unused-vars': 'off'
  },

  settings: {
    node: {
      path: ['src']
    }
  }
}
