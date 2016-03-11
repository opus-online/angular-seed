var webpack = require('webpack');
var packageJson = require('./package.json');

var config = {
    entry: {
        app: './src/bootstrap.js',
        vendor : packageJson.vendors
    },
    output: {
        path: __dirname + '/www/',
        filename: 'application.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-decorators-legacy']

                }
            },
            {test: /\.html$/, loader: 'raw'}
        ]
    },
    resolve: {
        alias: {
            '@core': __dirname + '/src/core.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            SEED_CORE : {
                DEVELOPMENT : true,
                DEBUG : true,
                VENDORS :  JSON.stringify(packageJson.vendors),
                DEPENDENCIES : {
                    ANGULAR : JSON.stringify(packageJson.angularDependencies)
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            filename : 'vendor.bundle.js'
        })
    ],
    devServer: {
        contentBase: 'www',
        inline: true,
        quiet: false,
        filename: 'application.js',
        host: 'localhost',
        port: 8100,
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
    //devtool: 'sourcemap'
};

module.exports = config;
