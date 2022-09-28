//1导入fs模块,来操作文件
const fs= require('fs')


// 调用fs.readFile()方法读取文件
// 参数1： 读取文件的存放路径
// 参数2 读取文件的时候 采用的编码格式  一般默认指定 utf8
// 参数3 回调函数 拿到读取成功和失败的结果 err dataStr
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    // 打印失败的结果
    //如果读取成功 则err的值为null
    // 如果读取失败 则err的值为错误对象 dtaStr的值为undefined
    console.log(err);

    // 打印成功的结果
    console.log(dataStr);
})