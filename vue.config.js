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
  

  // Configurar la URL base de la aplicación
  publicPath: process.env.NODE_ENV === 'production' ? '/mi-app/' : '/',
  
};