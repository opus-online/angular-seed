const env = require('./scripts/environment.js');

module.exports = {
    debug: true,
    devtool: 'source-map',
    module: {
        preLoaders: [{
            test: /\.js$/i,
            loader: 'eslint',
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: 'www',
        historyApiFallback: true,
        inline: true,
        quiet: false,
        host: '0.0.0.0',
        port: env.PORT,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false
        }
    }
};
