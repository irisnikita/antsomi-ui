// Libraries
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "Antsomi UI",
  brandUrl: "https://github.com/reactstrap/reactstrap",
  brandImage:
    "https://st-home.antsomi.com/wp-content/uploads/2020/04/Antsomi-CDP-365-logo.png",
});

addons.setConfig({
  theme,
});
