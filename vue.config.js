module.exports = {
    outputDir: '../admin_server/static',
    lintOnSave: true,
    devServer: {
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8002',
          changeOrigin: true,
          secure: false
        }
      }
    }
  };