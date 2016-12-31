const env = require('./scripts/environment.js');

const path = require('path');

const webpack = require('webpack');
const packageJson = require('./package.json');

/**
 * Webpack plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

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
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loaders: ['babel']
            },
            { test: /\.html$/, loader: 'raw' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            SEED_CORE: {
                VENDORS: JSON.stringify(packageJson.vendors),
                DEPENDENCIES: {
                    ANGULAR: JSON.stringify(packageJson.angularDependencies)
                },
                ENV: JSON.stringify(env)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new NgAnnotatePlugin({
            add: true
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
        historyApiFallback: true,
        inline: true,
        quiet: false,
        filename: 'application.js',
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

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        },
        compress: {
            drop_console: true,
            warnings: false
        }
    }));
}
else if (process.env.NODE_ENV === 'development') {
    config.plugins.push(new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map'
    }));
    config.module.preLoaders.push({ test: /\.js$/, loader: 'eslint-loader?parser=babel-eslint', exclude: /node_modules/ });
    config.eslint = {
        configFile: path.join(__dirname, '.eslintrc') // parser doesn't work, needs to be defined in the loader section: https://github.com/MoOx/eslint-loader/issues/92
    };
}

module.exports = config;
