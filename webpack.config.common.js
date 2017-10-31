const path = require('path');
const HtmlWebpackPluginConfig = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index'),
    vendor: ['material-ui', 'material-ui-icons', 'typeface-roboto']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPluginConfig({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};