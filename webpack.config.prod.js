const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const webpack = require("webpack");
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new webpack.EnvironmentPlugin({
            DEBUG: false
        }),
        new UglifyWebpackPlugin()
    ]
});