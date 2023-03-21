module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', ' .tsx'],
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
            peerDependencies: true,
          },
        ],
        'react/prop-types': 0,
      },
    },
  ],
};
