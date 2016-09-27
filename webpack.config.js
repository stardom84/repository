const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'main': './src/main.ts'

    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],

        // An array of directory names to be resolved to the current directory
        modules: [path.resolve(__dirname), 'node_modules'],

    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader'
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            }
        ]
    },
    output: {

        /**
         * The output directory as absolute path (required).
         *
         * See: http://webpack.github.io/docs/configuration.html#output-path
         */
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        sourceMapFilename: 'index.map'
    }
};
