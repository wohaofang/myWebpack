var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path : __dirname + '/dist',
        filename : 'js/[name].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ],
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             loader: 'babel',
    //             exclude: path.resolve(__dirname, 'node_modules'),
    //             query: {
    //                 presets: ['latest']
    //             }
    //         }
    //     ]
    // }
    module: {
        loaders: [
            {
                test: /\.js$/, 
                // exclude: /node_modules/, // loader不处理
                exclude: path.resolve(__dirname, 'node_modules'),
                // include: './src/', //打包范围就在 src下
                include: path.resolve(__dirname, 'src'),
                loader: "babel-loader" 
            }
        ]
    }
}