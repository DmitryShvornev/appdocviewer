const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/user/docs/*": {
        target: "https://agile-sands-40710.herokuapp.com",
        secure: true
      }
    }
  }
})