const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['@antscorp/antsomi', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'error',
  },
};
