# kbase-websocket
前后端分离 websocket 的应用 / springboot + vue + websocket + wss

## 前端 devServer 反向代理 ws
1. `vue.config.js`
```
proxy: {
  "/ws": {
    target: `http://localhost:8080/websocket/`,
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      "/ws": ""
    }
  }
}
```
2. `new WebSocket`
```
let new_url = getWsLocation("ws/20");
console.log(new_url);
let socket = new WebSocket(
  // "ws://localhost:5000/ws/20"
  new_url
);
```
3. nginx 中配置wss反向代理的方法

[nginx反向代理WebSocket](https://www.xncoding.com/2018/03/12/fullstack/nginx-websocket.html)

[【配置】使用nginx反向代理加密websocket (wss)](https://blog.csdn.net/zouyongjin/article/details/78465755)