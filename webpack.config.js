var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/jsx/entry.js',
    output: {
        path: './build/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /.jsx?$/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    node: {
      fs: "empty"
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
