const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../src/stories/Home/overview.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ];

    // Return the altered config
    return config;
  },
};
