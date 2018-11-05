var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    name:'js',
    entry: {
        // 'main':             './app/main.js',
        'index':           './app/src/js/index.js'
    },
    output: {
        path: './app',
        filename: 'dist/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{ test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" },{
            test: /\.coffee$/,
            loader: "coffee-loader"
        },{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/

        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel"

        }, {
            test: /\.css$/,
            loader: 'style!css!less'
        }, {
                test: /\.less$/,
                loader: 'style!css!less'
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=dist/[hash].[ext]',
                // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};
