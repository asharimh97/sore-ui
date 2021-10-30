const path = require("path");

/**
 * Core JS problem on build resolve reference:
 * https://github.com/storybookjs/storybook/issues/11255#issuecomment-673899817
 */
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  resolve: {
    alias: {
      "core-js/modules": path.resolve(
        __dirname,
        "..",
        "node_modules/core-js/modules",
      ),
    },
  },
};
