module.exports = {
  extends: ["@antscorp/antsomi", "plugin:storybook/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [],
  rules: {
    "no-console": "error",
  },
  overrides: [],
};
