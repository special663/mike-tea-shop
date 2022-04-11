module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
