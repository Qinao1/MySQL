
// 安装 express服务端框架
// 1引用express 在js里面
const express = require('express');

// 2创建应用对象
const app = express();

// 3创建路由规则
// request是对请求报文的一个封装
// response  是对象响应报文的一个封装
// 如果把/改成/servar 当客户端浏览器向服务器发送请求时 如果说
// URL的路径是请求行的第二段内容  它的路径是/server的话 
// 那这个时候就会执行这个回调函数里面的 代码 并且由response做出响应

app.get('/server', (request, response) => {
    // 设置响应
    // 设置响应头  这里的响应头非常关键 一定要写 不然后面会报错 这是设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    // response.send('HELLO EXPRESS');
    response.send('HELLO AJAX-2');
});
// all可以接收任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应
    // 设置响应头  这里的响应头非常关键 一定要写 不然后面会报错 这是设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 自定义
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    // response.send('HELLO EXPRESS');
    response.send('HELLO AJAX POST');
});

app.all('/json-server', (request, response) => {
    // 设置响应
    // 设置响应头  这里的响应头非常关键 一定要写 不然后面会报错 这是设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 自定义
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    // 响应一个数据
    const data={
        name:'atguigu'
    }
    // 对字符串进行一个转化
    let str=JSON.stringify(data)
    // response.send('HELLO EXPRESS');
    response.send(str);
});
// 针对IE缓存
app.get('/ie', (request, response) => {
    // 设置响应
    // 设置响应头  这里的响应头非常关键 一定要写 不然后面会报错 这是设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    // response.send('HELLO EXPRESS');
    response.send('HELLO IE-2');
});


// 4监听端口启动服务

app.listen(8000, () => {
    console.log("服务端已经启动,8000 端口监听中....");
})
//启动服务 用node这个命令 对脚本进行执行