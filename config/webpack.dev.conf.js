/* eslint-disable @typescript-eslint/no-var-requires */

const {merge} = require("webpack-merge");

const baseConfig = require("./webpack.base.conf.js");

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./build",
        port: 3000
    }
});
