const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/vue-todo/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: ' @import "@/assets/sass/main.scss"; ',
      },
    },
  },
});
