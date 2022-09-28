// 1.引入fs模块
const fs=require('fs');

// 调用方法读取文件
// fs.readFile('插秧诗.md',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());
// })
// 使用promise封装
const p=new Promise(function(resolve,reject){
    fs.readFile('插秧诗.md',(err,data)=>{
        //判断
        if(err) reject(err);
        // 如果成功
        resolve(data);
    })
})

p.then(function(value){
    console.log(value.toString());
},function(){
    console.log('读取失败');
})