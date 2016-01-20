var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/jsx/entry.jsx',
    output: {
        path: './build/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                test: /.jsx?$/
            }
        ]
    },
    watch: true,
    cache: true,
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
