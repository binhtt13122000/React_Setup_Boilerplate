const { merge: mergeDev } = require("webpack-merge");
const commonDev = require("./webpack.common.ts");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackDev = require('webpack');
const pathDev = require("path");

module.exports = mergeDev(commonDev, {
  mode: "development",
  output: {
    path: pathDev.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "eval-source-map",
  plugins: [
    new webpackDev.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    contentBase: "./build",
    port: process.env.APP_ROOT_PORT || 3000,
    historyApiFallback: true,
    hot: true,
  },
});
