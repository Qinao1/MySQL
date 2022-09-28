
// 安装 express服务端框架
// 1引用express 在js里面
const express = require('express');

// 2创建应用对象
const app = express();

// 3创建路由规则
// request是对请求报文的一个封装
// response  是对象响应报文的一个封装
app.get('/', (request, response) => {
    // 设置响应
    response.send('HELLO EXPRESS');
});

// 4监听端口启动服务
app.listen(8000, () => {
    console.log("服务端已经启动,8000 端口监听中....");
})
//启动服务 用node这个命令 对脚本进行执行