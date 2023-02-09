const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch')

    config.module
      .rule('images')
        .set('parser', {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4KiB
          }
        })
  },
  transpileDependencies: true
})
