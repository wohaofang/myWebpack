var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')


// module.exports = { //common js 规范
//     // entry: './src/script/main.js', //打包入口文件  ------> 分文件打包
//     // entry: ['./src/script/main.js', './src/script/a.js'],//为了能打包多个平行文件，可以写成数组的形式
//     entry: {  //对象的形式 输出文件
//         main : "./src/script/main.js",
//         a : "./src/script/a.js"
//     },
//     output: {  //输出文件
//         path: __dirname + "/dist/js",// 打包后的路径
//         filename: "[name]-[chunkhash].js" // 打包后的名字
//     }
// }

// plugins: [ //插件   htmlWebpackPlugin-----配置
//     new htmlWebpackPlugin({
//         // filename : 'index-[hash].html', //能设置hsah值
//         filename : 'index.html', 
//         template : 'index.html',
//         // inject : 'head',
//         inject : false,
//         title : 'webpack is good',
//         data : new Date(),
//         minify: { //压缩
//             removeComments: true,
//             collapseWhitespace: true
//         }
//     })
// ]


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
                test:/\.html$/,
                loader: 'html-loader'
            },
            {
                test:/\.tpl$/,
                loader: 'ejs-loader'
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
            },
            // {
            //     test: /\.(png|jpg|gig|svg)$/i,
            //     loader: 'file-loader', //图片
            //     query: {
            //         name: "assets/[name]-[hash:5].[ext]" //打包到这个目录并加上hash值
            //     }
            // },
            // {
            //     test: /\.(png|jpg|gig|svg)$/i,
            //     loader: 'url-loader', //与file-loader类似
            //     query: {
            //         limit: 20000,//小于20k的图片转化成basc64
            //         name: "assets/[name]-[hash:5].[ext]" //打包到这个目录并加上hash值
            //     }
            // },
            {
                test: /\.(png|jpg|gig|svg)$/i,
                loaders: [ // ！！！！！loaders 写成数组可以直接引入多个loader包，但是参数必须加载包后面
                    'url-loader?limit=20000$name=assets/[name]-[hash:5].[ext]',
                    'image-webpack' // 可以压缩图片
                ]
            }
        ]
    },
}

