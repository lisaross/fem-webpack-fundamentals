const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = ({ mode }) => {
  console.log(mode);
  return {
    mode,
    output: {
      filename: "bundle.js"
    },
    // htmlwebpack injects output assets into index.html file
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
  };
};
// there will be plugins etc that are used on all environments, but others will be prod only or dev only
