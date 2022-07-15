module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-comma-dangle': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-unneeded-ternary': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/function-component-definition': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    curly: 'off',
    strictPropertyInitialization: 0,
  },
};
