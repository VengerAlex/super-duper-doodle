import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const Dotenv = require('dotenv-webpack');

export const buildPlugins = ({paths, mode}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new Dotenv({path: `./.env.${mode}`})
    ]
}
