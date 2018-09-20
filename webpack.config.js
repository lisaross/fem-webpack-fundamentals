const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log(mode);
  return {
    mode,
    devtool: "inline-source-map",
    output: {
      filename: "bundle.js"
    },
    // htmlwebpack injects output assets into index.html file
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
  };
};
// there will be plugins etc that are used on all environments, but others will be prod only or dev only
