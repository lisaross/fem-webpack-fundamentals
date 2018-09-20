const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log(mode);
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  );
};
// there will be plugins etc that are used on all environments, but others will be prod only or dev only
