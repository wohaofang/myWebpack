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
            },
            {
                test:/\.html/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader!postcss-loader',//上下相等
                loader: ['style-loader','css-loader?importLoaders=1','postcss-loader']
            },
            // {
            //     test: /\.scss$/,
            //     loader: ['style-loader','css-loader?importLoaders=1','postcss-loader','sass-loader']
            // },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader" // compiles Sass to CSS 
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "less-loader" // compiles Less to CSS 
                }]
            }
        ]
    },
}