const { createProxyMiddleware } = require("http-proxy-middleware");
const mockServer = "http://localhost:3001";

module.exports = function (app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: mockServer,
      changeOrigin: true,
    })
  );
};

console.log(module);