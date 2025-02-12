import { createProxyMiddleware } from 'http-proxy-middleware';

import { Application } from 'express';

module.exports = function (app: Application) {
    app.use('/spotify/**', 
        createProxyMiddleware({ 
            target: 'http://localhost:5000'
        })
    );
};