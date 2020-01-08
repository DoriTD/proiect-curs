const path = require("path");
const webpack = require("webpack");
const entryPath = "src";
const entryFile = "index.jsx";

module.exports = {
  entry: ["whatwg-fetch", `./${entryPath}/js/${entryFile}`],
  //entry: ["whatwg-fetch", `./${entryPath}/js/${entryFile}`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "dev"
      )
    })
  ]
};
