const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const webpack = require("webpack");

module.exports = merge(common, {
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            DEBUG: true
        })
    ]
});