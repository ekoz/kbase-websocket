"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = 5000; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  css: {
    sourceMap: true
  },
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      "/ws": {
        target: `http://localhost:8080/websocket/`,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "/ws": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
