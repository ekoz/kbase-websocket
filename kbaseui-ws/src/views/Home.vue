<template>
  <div class="home">
    <h1>WebSocket demo</h1>
    <input type="text" v-model="msg" />
    <input type="button" value="send" @click="send" />
  </div>
</template>

<script>
import { getWsLocation } from "../util/CommonUtils";
export default {
  data() {
    return {
      msg: "",
      websocket: null
    };
  },
  created() {
    //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
    //等同于socket = new WebSocket("ws://localhost:8083/checkcentersys/websocket/20");
    let new_url = getWsLocation("ws/20");
    console.log(new_url);
    let socket = new WebSocket(
      // "ws://localhost:8080/websocket/20".replace("http", "ws")
      // "ws://localhost:5000/ws/20"
      new_url
    );
    //打开事件
    socket.onopen = function() {
      console.log("Socket 已打开");
      //socket.send("这是来自客户端的消息" + location.href + new Date());
    };
    //获得消息事件
    socket.onmessage = function(msg) {
      console.log(msg.data);
      //发现消息进入    开始处理前端触发逻辑
    };
    //关闭事件
    socket.onclose = function() {
      console.log("Socket已关闭");
    };
    //发生了错误事件
    socket.onerror = function() {
      alert("Socket发生了错误");
      //此时可以尝试刷新页面
    };
    this.websocket = socket;
  },
  destroyed() {
    this.websocket.close();
  },
  methods: {
    send() {
      if (this.msg) {
        console.log(this.msg);
        this.websocket.send(this.msg);
      }
    }
  }
};
</script>
