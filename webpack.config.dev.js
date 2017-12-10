const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const webpack = require("webpack");

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  // devtool: 'eval',
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});