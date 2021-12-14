/* eslint-disable @typescript-eslint/no-var-requires */

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    entry:[
        "babel-polyfill",
        "./src/index.tsx"
    ],
    output: {
        filename: "bundle.[hash].js",
        path: path.join(__dirname, "../build"),
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        plugins: [
            new TsconfigPathsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.[tj]s(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: "svg-url-loader",
                    options: {
                        limit: 10000,
                    },
                },
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
    ],
    experiments: {
        topLevelAwait: true
    }
};
