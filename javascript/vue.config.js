module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles.sass"',
      },
    },
  },

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api/': '/' },
      },
    },
  },
}
