const env = require('./scripts/environment.js');

const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = function (config) {
    config.set({

        files: [
            'test/bootstrap.tests.js'
        ],

        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        preprocessors: {
            // add webpack as preprocessor
            'test/bootstrap.tests.js': ['webpack']
        },

        webpack: {
            // loaders : [],
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: [/node_modules/],
                        loader: 'babel'
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
                })
            ]
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
