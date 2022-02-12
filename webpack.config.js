const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        // !!The chain is executed in "reverse order"!!
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
  ],
};
