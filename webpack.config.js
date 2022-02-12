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
    ],
  },
  devServer: {
    // when webpack web server on open dist(=>index.html)
    contentBase: outputPath,
  },
};
