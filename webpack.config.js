const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const JavascriptObfuscator = require("webpack-obfuscator")
const AutoProWebpackPlugin = require('@auto.pro/webpack-plugin')
const ProgressPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const compilePlugin = new AutoProWebpackPlugin({
    ui: [],
    // encode: {
    //     key: ''
    // }
})

const config = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "var"
        // libraryTarget: "commonjs2"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader', '@auto.pro/webpack-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', '@auto.pro/webpack-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.plugins = [
            new CleanWebpackPlugin(),
            new BundleAnalyzerPlugin(),
            compilePlugin,
            new ProgressPlugin()
        ]
        config.devtool = 'source-map'
    } else {
        config.plugins = [
            new CleanWebpackPlugin(),
            new JavascriptObfuscator({
                compact: true,
                target: "node",
                transformObjectKeys: false,
                stringArray: true,
                stringArrayEncoding: ['rc4'],
            }),
            compilePlugin,
            new ProgressPlugin()
        ]
    }

    return config
}