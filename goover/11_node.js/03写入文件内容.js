const fs=require('fs')

/* 参数1必选参数 需要指定一个文件路径的字符串 表示文件的存放路径
    参数2 必选参数 表示要写入的内容
    参数3 可选参数 表示以什么格式写入文件内容 默认值是utf8
    参数4 必选参数 文件写入完成后的回调函数 */
fs.writeFile('./files/2.txt','absdsda',function(err){
    // 如果文件写入成功 则err为null
    // 如果文件写入失败 则err的值等于一个错误对象
    // console.log(err);
    if(err){
        console.log('文件写入失败'+err.message);
    }
    console.log('文件写入成功');
})