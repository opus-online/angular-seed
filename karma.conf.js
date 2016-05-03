const webpack = require('webpack');

const packageJson = require('./package.json');
const path = require('path');

module.exports = function(config) {
    config.set({

        files: [
            'src/bootstrap.tests.js'
        ],

        browsers : ['PhantomJS'],

        frameworks: ['jasmine'],

        preprocessors: {
            // add webpack as preprocessor
            'src/bootstrap.tests.js': ['webpack']
        },

        webpack: {
            //loaders : [],
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
            plugins: [
                new webpack.DefinePlugin({
                    SEED_CORE: {
                        VENDORS: JSON.stringify(packageJson.vendors),
                        DEPENDENCIES: {
                            ANGULAR: JSON.stringify(packageJson.angularDependencies)
                        },
                        ENV: JSON.stringify(process.env)
                    }
                })
            ],
            resolve: {
                alias: {
                    '@core': __dirname + '/src/core.js'
                }
            }
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true,
            stats: {
                chunkModules: false,
                colors: true
            }
        }
    });
};
