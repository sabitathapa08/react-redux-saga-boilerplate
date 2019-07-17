const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "index.html",
    inject: true
  });
  
  module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'react-webpack.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use:["style-loader", "css-loader"]
        }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        hot: true
      },
    plugins: [htmlPlugin]
  };