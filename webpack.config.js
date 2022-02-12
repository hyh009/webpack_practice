const path = require("path");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath,
  },
  devServer: {
    // when webpack web server on open dist(=>index.html)
    contentBase: outputPath,
  },
};
