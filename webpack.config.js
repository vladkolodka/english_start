const path = require('path');
const HtmlWebpackPluginConfig = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPluginConfig({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.EnvironmentPlugin({
      DEBUG: true
    })
  ]
};