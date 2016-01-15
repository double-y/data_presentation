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
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                test: /.jsx?$/
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
