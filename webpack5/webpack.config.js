const path = require("path");
const { YarnCheck } = require("yarn-check-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  plugins: [new YarnCheck({
    forceKill: true
  })]
};
