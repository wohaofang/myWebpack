module.exports = { //common js 规范
    // entry: './src/script/main.js', //打包入口文件
    // entry: ['./src/script/main.js', './src/script/a.js'],//为了能打包多个平行文件，可以写成数组的形式
    entry: {  //对象的形式 输出文件
        main : "./src/script/main.js",
        a : "./src/script/a.js"
    },
    output: {  //输出文件
        path: __dirname + "/dist/js",// 打包后的路径
        filename: "[name]-[chunkhash].js" // 打包后的名字
    }
}
