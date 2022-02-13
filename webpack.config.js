const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        enforce: "pre", // execute first (because eslint need to check the origin source code)
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // i for uppercase
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          // images that bigger than 2kb will be put into ./images folder
          // to improve performance
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
      {
        // for react
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    // when webpack web server on open dist(=>index.html)
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebPackPlugin({
      // source
      template: "./src/index.html",
      // output filename
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({
      // hash => to create unique file name
      filename: "[name].[hash].css",
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: { drop_console: true },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // for debug
  devtool: "eval-source-map",
};
