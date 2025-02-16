import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
       },
  },
});




// import { createProxyMiddleware } from 'http-proxy-middleware';

// import { Application } from 'express';

// module.exports = function (app: Application) {
//     app.use('/auth/**', 
//         createProxyMiddleware({ 
//             target: 'http://localhost:3000'
//         })
//     );
// };