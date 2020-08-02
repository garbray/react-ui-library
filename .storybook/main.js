module.exports = {
  stories: ["../packages/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async (config) => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== "/\\.css$/"
    );

    // push our custom easy one
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            //key config
            modules: true,
          },
        },
      ],
    });

    // this is where we change the order of resolution fo the main fields
    config.resolve.mainFields = ["src", "module", "main"];
    return config;
  },
};
