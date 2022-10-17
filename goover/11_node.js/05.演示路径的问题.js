const fs=require('fs')

// 出现路径拼接除外的问题，是因为提供了相对路径
// 解决这个问题，直接提供一个完整的文件存放路径
// 不要使用./或../这样的路径
/* fs.readFile('./files/1.txt','utf8',function(err,dataStar){
    if(err){
        return console.log('读取文件失败'+err.message);
    }
    console.log('读取文件成功',+dataStar);
}) */
// __dirname 表示当前文件所处的目录
// console.log(__dirname);
fs.readFile(__dirname+'/files/1.txt','utf8',function(err,dataStar){
    if(err){
        return console.log('读取文件失败'+err.message);
    }
    console.log('读取文件成功',+dataStar);
})

