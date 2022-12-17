const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/user',
        createProxyMiddleware({
          target: 'http://localhost:4000',
          changeOrigin: true,
        })
      );
      app.use(
        '/artCard',
        createProxyMiddleware({
          target: 'http://localhost:4000',
          changeOrigin: true,
        })
      )
};