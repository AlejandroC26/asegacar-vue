module.exports = {
  devServer:{
    host: 'localhost',
  },
  // Cambiar el título de la pestaña del navegador
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Asegacar';
      return args;
    });
  },
};