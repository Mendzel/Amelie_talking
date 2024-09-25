module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    'no-unreachable': ['error'],
    semi: 'error',
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn', 'info'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['./', '../'],
            message: 'Relative imports are not allowed.',
          },
        ],
      },
    ],
    'no-multiple-empty-lines': 'error',
    'prefer-arrow-callback': 'error',
    'no-unused-expressions': 'error',
    indent: 'off',
    'keyword-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'arrow-spacing': 'error',
  },
};
