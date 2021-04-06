const path = require('path');//npm init导入的node包
const webpack = require('webpack');//自己插件，无需安装
const HtmlWebpackPlugin = require('html-webpack-plugin');//页面入dist插件
const uglify = require('uglifyjs-webpack-plugin');//压缩js插件
module.exports = {
  entry: './src/main.js',//入口文件
  //出口指定路径和编译后的文件名称
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    //publicPath: 'dist/'//地址加前缀

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //先读'css-loader'后读'style-loader'
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载图片时，小于limit 会将图片编译成base64字符串形式。
              //当加载图片时，大于limit,需要使用file-loader模块进行加载。
              limit: 8196,
              //自定义命名图片路径，img文件夹 [原图片名称].[hash:哈希值截取前8位].[扩展名]
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.js$/,
        // exclude:排除
        // include:包含
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    //alias:别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  //插件
  plugins: [
    //js编译后横幅
    new webpack.BannerPlugin('最终版权归陈国梁所有'),
    //html编译到dist文件目录
    new HtmlWebpackPlugin({
      //指定模板
      template: 'index.html'
    }),
    new uglify()
  ],
  //本地开发服务
  devServer: {
    contentBase: './dist',
    inline: true,//页面实时刷新
    port: 8080//可以指定端口号，不指定 默认8080
  }
}