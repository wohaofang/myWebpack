var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { //common js 规范
    // entry: './src/script/main.js', //打包入口文件
    // entry: ['./src/script/main.js', './src/script/a.js'],//为了能打包多个平行文件，可以写成数组的形式
    entry: {  //对象的形式 输出文件
        main : "./src/script/main.js",
        a : "./src/script/a.js",
        b : "./src/script/b.js",
        c : "./src/script/c.js",
    },
    output: {  //输出文件
        path: __dirname + "/dist",// 打包后的路径
        filename: "js/[name]-[chunkhash].js", // 打包后的名字
        // publicPath: 'http://cdn.com/',//网址前缀
    },
    plugins: [ //插件
        new htmlWebpackPlugin({
            // filename : 'index-[hash].html', //能设置hsah值
            filename : 'index.html', 
            template : 'index.html',
            // inject : 'head',
            inject : false,
            title : 'webpack is good',
            data : new Date(),
            // minify: { //压缩
            //     removeComments: true,
            //     collapseWhitespace: true
            // }
        }),
        new htmlWebpackPlugin({
            filename : 'a.html', 
            template : 'index.html',
            // inject : 'head',
            inject : 'body',
            title : 'webpack is a',
            chunks: ['main','a'],
            // exclideChunks:['b'] //除了b以外的文件
        }),
        new htmlWebpackPlugin({
            filename : 'b.html', 
            template : 'index.html',
            // inject : 'head',
            inject : 'body',
            title : 'webpack is b',
            chunks: ['main','b']
        }),
    ]
}
