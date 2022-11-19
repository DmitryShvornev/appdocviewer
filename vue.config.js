process.env.VUE_APP_NAME = "Document Viewer";
process.env.VUE_APP_ROUTE = "https://agile-sands-40710.herokuapp.com/user/docs/?search=";
process.env.VUE_APP_STORE_NAME = "documents";

const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})