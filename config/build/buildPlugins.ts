import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {BuildOptions} from '../types/config';

export function buildPlugins({paths}: BuildOptions) {
    return [
        new HtmlWebpackPlugin({ 
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]

}