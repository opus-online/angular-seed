const env = require('./scripts/environment.js');

const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const packageJson = require('./package.json');
const PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * Webpack plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

const config = {
    entry: {
        app: path.resolve('src/bootstrap.js'),
        vendor: packageJson.vendors
    },
    output: {
        path: path.join(__dirname, 'www/'),
        filename: '[name].js'
    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/i,
                exclude: [/node_modules/],
                loaders: ['babel']
            }, {
                test: /\.css$/i,
                loaders: ['style', 'css']
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.svg$/i,
                loader: 'svg-url',
                query: {
                    noquotes: !PRODUCTION,
                    limit: 1024000 // 1 Mb
                }
            }, {
                test: /\.(jpg|jpeg|webp|png|gif)$/i,
                loader: 'file'
            }, {
                test: /\.woff(\?v=\d+(\.\d+\.\d+)?)?$/i,
                loader: 'url',
                query: {
                    limit: 65000, // 65 kb
                    mimetype: 'application/font-woff'
                }
            }, {
                test: /\.woff2(\?v=\d+(\.\d+\.\d+)?)?$/i,
                loader: 'url',
                query: {
                    limit: 65000, // 65 kb
                    mimetype: 'application/font-woff2'
                }
            }, {
                test: /\.[ot]tf(\?v=\d+(\.\d+\.\d+)?)?$/,
                loader: 'url',
                query: {
                    limit: 65000, // 65 kb
                    mimetype: 'application/octet-stream'
                }
            }, {
                test: /\.eot(\?v=\d+(\.\d+\.\d+)?)?$/i,
                loader: 'url',
                query: {
                    limit: 65000, // 65 kb
                    mimetype: 'application/vnd.ms-fontobject'
                }
            }, {
                test: /font.?\/.*\.svg(\?v=\d+(\.\d+\.\d+)?)?$/i,
                loader: 'url',
                query: {
                    limit: 65000, // 65 kb
                    mimetype: 'image/svg+xml'
                }
            }
        ],
        postLoaders: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'autopolyfiller',
                query: {
                    browsers: ['last 2 versions', 'ie >= 9']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
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
            cache: true,
            chunksSortMode: 'dependency',
            minify: PRODUCTION ? {
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true,
                removeOptionalTags: true,
                removeComments: true,
                preserveLineBreaks: true
            } : false
        })
    ]
};

module.exports = merge.smart(config, require(`./webpack.${process.env.NODE_ENV || 'development'}.js`));
