module.exports = {
    chainWebpack:config=>{
        config
            .module
              .rule('vue')
              .use('vue-loader')
              .loader('vue-loader')
              .tap(option=>{
                  option.transformAssetUrls={
                      audio:'src',
                  }
                  return option;
              });
    }
}