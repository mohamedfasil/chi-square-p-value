const path = require("path")

module.exports = {
  mode: "production",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname),
    filename: "chi-square-p-value.js",
    library: "analyse",
    libraryTarget: "umd",
    // see https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target
    globalObject: "this",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
}
