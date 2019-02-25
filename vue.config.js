module.exports = {
  pages: {
    index: {
      entry: 'src/views/modules/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index page',
      chunks: ['index']
    },
    console: {
      // 应用入口配置
      entry: 'src/views/modules/console/console.js',
      template: 'public/console.html',
      filename: 'console.html',
      title: 'console page',
      chunks: ['console']
    },
    client: {
      entry: 'src/views/modules/client/client.js',
      template: 'public/client.html',
      filename: 'client.html',
      title: 'client page',
      chunks: ['client']
    }
  }
}
