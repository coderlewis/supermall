module.exports = {
  configureWebpack: { // 表示配置Webpack
    resolve: { // resolve配置路径相关
      extensions: [], // 用于省略文件后缀名
      alias: { // 配置别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}