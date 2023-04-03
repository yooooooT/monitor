const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js', // 入口文件
  context: process.cwd(), // 上下文目录
  mode: 'development', // 开发模式
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'monitor.js'  // 输出文件名
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // 本地服务器所加载的页面所在的目录
  },
  plugins: [
    new HtmlWebpackPlugin({ // 生成html文件
      template: './src/index.html',
      inject: 'head'
    })
  ]
}