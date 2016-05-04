require('dotenv-safe').load({ allowEmptyValues: true, silent: true });

const webpack = require('webpack');
const packageJson = require('./package.json');

/**
 * Webpack plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: './src/bootstrap.js',
        vendor: packageJson.vendors
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
            { test: /\.html$/, loader: 'raw' }
        ]
    },
    resolve: {
        alias: {
            '@core': __dirname + '/src/core.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            SEED_CORE: {
                VENDORS: JSON.stringify(packageJson.vendors),
                DEPENDENCIES: {
                    ANGULAR: JSON.stringify(packageJson.angularDependencies)
                },
                ENV: JSON.stringify(process.env)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new HtmlWebpackPlugin({
            title: 'Opus',
            template: 'src/index.ejs',
            inject: true,
            hash: true,
            cache: true
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
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        exclude: [
            'application.bundle.js'
        ],
        compress: { warnings: false },
        mangle: true
    }));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        include: [
            'application.bundle.js'
        ],
        compress: { warnings: false },
        mangle: false
    }));
}
else if (process.env.NODE_ENV === 'development') {
    config.plugins.push(new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map'
    }));
}

module.exports = config;
