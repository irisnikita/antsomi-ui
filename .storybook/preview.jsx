// Libraries
import React from "react";
import { ConfigProvider } from "../src";

// Css
import "@antscorp/icons/main.css";
import "./main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Home", ["Overview", "Installation", "Usage"], "Components"],
    },
    viewMode: "docs",
  },
};

export const decorators = [
  (Story) => (
    <ConfigProvider>
      <Story />
    </ConfigProvider>
  ),
];
