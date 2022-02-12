const path = require("path");

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
        test: /\.css$/,
        // !!The chain is executed in "reverse order"!!
        use: ["style-loader", "css-loader"],
      },
      {
        // i for uppercase
        test: /\.(jep?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          // images that bigger than 2kb will be put into ./images folder
          // to improve performance
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    // when webpack web server on open dist(=>index.html)
    contentBase: outputPath,
  },
};
