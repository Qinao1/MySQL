const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    // https:true,
    port: 6103,
    client: {
      webSocketURL: 'ws://0.0.0.0:6103/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true,
  lintOnSave: false //关闭语法检查
})


/* module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js'
    },
  },
  lintOnSave: false,//关闭语法检查

  // 开启代理服务器(方式1)
  // devServer: {
  //   proxy: 'http://localhost:8000'
  // },
  // 开启代理服务器（方式2）
  devServer: {
    proxy: {
      '^/api': {//请求前缀
        target: 'http://localhost:8000',
        // ws: true,//用于支持websocket
        // changeOrigin: true
      },
    }
  }
} */
