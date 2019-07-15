/**
 * @file
 * @author
 * @version 0.1.0
 */
const path = require("path");
const webpack = require("webpack");
const metadata = require("../version.json");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = (env) => {
  return {
    mode: "production",
    entry: "./index.js",
    output: {
      publicPath: "/dist/js/",
      filename: `monitor.${metadata.version}.js`,
      path: path.resolve(__dirname, "../dist/js/"),
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new CompressionWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
  };
}
