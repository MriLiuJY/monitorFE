const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    publicPath: "/dist/js/",
    filename: "monitor.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    contentBase: "./dist/",
    port: 8080,
    hot: true,
    host: "localhost",
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: "babel-loader",
    },
    {
      test:/\.scss$/,
      use:["style-loader","css-loader"],
    }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ie8: true,
        ecma: 5,
        output: {
          comments: (astNode, comment) => comment && comment.value && /@jscrambler/.test(comment.value),
          beautify: false,
        },
        compress: {
          properties: false,
          drop_console: true,
        },
      },
    }),
  ],
};
