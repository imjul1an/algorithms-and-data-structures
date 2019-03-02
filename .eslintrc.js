module.exports = {
    extends: ['prettier'],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true
      }
    },
    env: {
      jest: true,
      es6: true
    },
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
          semi: false,
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          fluid: false
        }
      ]
    }
  }