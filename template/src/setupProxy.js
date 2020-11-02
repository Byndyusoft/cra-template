const { createProxyMiddleware } = require('http-proxy-middleware');

function setupProxy(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'path/to/api',
            changeOrigin: true
        })
    );
}

module.exports = setupProxy;
