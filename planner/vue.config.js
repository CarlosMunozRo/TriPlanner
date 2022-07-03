const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,

  pwa: {
    name: 'TriPlanner',
    themeColor: '#005bc5'
  }
});
