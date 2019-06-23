'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('../paths');
const getClientEnvironment = require('../env');
const configHtmlPlugin = require('./plugin.html');

const publicPath = paths.servedPath;
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldMinify = process.env.MINIFY !== 'false';
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

// IDE doesn't have that because this file is used for code analysis like import aliases `'@/react/...'`
/*if (env.stringified['process.env'].NODE_ENV !== '"production"') {
    throw new Error('Production builds must have NODE_ENV=production.');
}*/

const cssFilename = 'css/[name].[contenthash:8].css';

const htmlPluginOptions = {
    minify: {
        removeComments: shouldMinify,
        collapseWhitespace: shouldMinify,
        removeRedundantAttributes: shouldMinify,
        useShortDoctype: shouldMinify,
        removeEmptyAttributes: shouldMinify,
        removeStyleLinkTypeAttributes: shouldMinify,
        keepClosingSlash: shouldMinify,
        minifyJS: shouldMinify,
        minifyCSS: shouldMinify,
        minifyURLs: shouldMinify,
    },
}

module.exports = {
    mode: shouldUseSourceMap ? "development" : "production",
    bail: true,
    devtool: shouldUseSourceMap ? 'source-map' : false,
    entry: {
        editor: [paths.editorJs],
        background: [paths.backgroundJs],
    },
    output: {
        path: paths.appBuild,
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: info =>
            path
                .relative(paths.appSrc, info.absoluteResourcePath)
                .replace(/\\/g, '/'),
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.scss'],
        alias: {
            '@': path.resolve(__dirname, '../../src/')
        },
        plugins: [
            new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
        ],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                            sourceMap: shouldUseSourceMap,
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.appSrc,
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            compact: true,
                        },
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    sourceMap: shouldUseSourceMap,
                                },
                            },
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    sourceMap: shouldUseSourceMap,
                                    modules: true,
                                },
                            },
                            {
                                loader: require.resolve('sass-loader'),
                                options: {
                                    sourceMap: shouldUseSourceMap,
                                    implementation: require("sass")
                                },
                            },
                        ],
                    },
                    {
                        test: /\.css$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    sourceMap: shouldUseSourceMap,
                                },
                            },
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    sourceMap: shouldUseSourceMap,
                                },
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    sourceMap: shouldUseSourceMap,
                                    ident: 'postcss',
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9',
                                            ],
                                            flexbox: 'no-2009',
                                        }),
                                    ],
                                },
                            }
                        ],
                    },
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(ts|tsx|js|jsx|mjs|scss)$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(Object.assign({}, configHtmlPlugin.editor, htmlPluginOptions)),
        new webpack.DefinePlugin(env.stringified),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false,
            },
            mangle: {
                safari10: true,
            },
            output: {
                comments: false,
                ascii_only: true,
            },
            sourceMap: shouldUseSourceMap,
        }),*/
        new MiniCssExtractPlugin({
            filename: cssFilename,
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
};
