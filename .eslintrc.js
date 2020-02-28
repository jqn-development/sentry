const eslintConfigSentryReactRulesImports = require('eslint-config-sentry-react/rules/imports');

const config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'emotion'],
  extends: ['sentry-app/strict'],
  globals: {
    require: false,
    expect: false,
    sinon: false,
    MockApiClient: true,
    TestStubs: true,
    tick: true,
    jest: true,
  },
  rules: {
    'emotion/jsx-import': 'off',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/issues/2066
        'react/sort-comp': 'warn',
      },
    },
  ],
};

//reuses the common rule import/order from the package eslint-config-sentry-react
config.rules['import/order'] =
  eslintConfigSentryReactRulesImports['rules']['import/order'];

// and includes a package-specific rule pathGroups - @emotion/styled
config.rules['import/order'][1]['pathGroups'] = [
  ...config.rules['import/order'][1]['pathGroups'],
  {
    pattern: '@emotion/styled',
    group: 'external',
  },
];

module.exports = config;
