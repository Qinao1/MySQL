
// 安装 express服务端框架
// 1引用express 在js里面
const express = require('express');

// 2创建应用对象
const app = express();
app.all('/student', (request, response) => {
    // 设置响应
    // 设置响应头  这里的响应头非常关键 一定要写 不然后面会报错 这是设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 自定义
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    // 响应一个数据
    const data=[
        {id:001,name:"马自达",price:1800},
        {id:002,name:"奔驰",price:1900},
        {id:003,name:"捷达",price:1200}
    ]
    // 对字符串进行一个转化
    let str=JSON.stringify(data)
    // response.send('HELLO EXPRESS');
    response.send(str);
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

// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应
    // 设置响应头  这里的响应头非常关键 一定要写 不然后面会报错 这是设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    setTimeout(()=>{
        response.send('延时响应');
    },3000)
});
// 4监听端口启动服务

app.listen(8001, () => {
    console.log("服务端已经启动2,8000 端口监听中....");
})
//启动服务 用node这个命令 对脚本进行执行