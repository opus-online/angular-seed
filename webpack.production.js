const webpack = require('webpack');

module.exports = {
    module: {
        preLoaders: [{
            test: /\.(jpg|jpeg|png|gif|svg)$/i,
            loader: 'image-webpack'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                drop_console: true,
                warnings: false
            }
        })
    ]
};
