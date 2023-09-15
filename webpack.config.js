'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        __dirname + '/src/js/main.js',
        __dirname + '/src/scss/styles.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CopyWebpackPlugin({ patterns: [{from: 'src/image', to: 'image'}] }),
        new CopyWebpackPlugin({ patterns: [{from: 'src/fonts', to: 'fonts'}] }),
    ],

    module: {
        rules: [
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader", options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader']
            }
        ]
    }
}