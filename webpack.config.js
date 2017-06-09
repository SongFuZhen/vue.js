var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  // entry: ['./src/script/main.js', './src/script/layout.js'],
  // entry: {
  //   main: './src/script/main.js',
  //   layout: './src/script/layout.js',
  //   a: './src/script/a.js',
  //   b: './src/script/b.js'
  // },
  output: {
    // path 使用 绝对路径
    path: '/Documents/vue.js/dist',
    filename: 'js/[name]-[chunkhash].bundle.js',
    // publicPath: 'http://cdn.com/'
  },
  
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
      // title: 'Webpack is Awesome!'
      // chunks: ['app']
      // excludeChunks: ['main', 'a']
    })
  ]
}
