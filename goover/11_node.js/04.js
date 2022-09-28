const fs=require('fs')

fs.readFile('./files/3成绩.txt','utf8',function(err,dataStr){
    //判断是否读取成功
    if(err){
        return console.log('读取失败'+err.message);
    }
    // console.log('读取文件成功'+dataStr);


    // 把成绩的数据 按照空格进行分割
    const arr=dataStr.split('')
    // console.log(arr);
    // 循环分割后的数组 对每一项数据 进行字符串的替换操作
    const srrNew=[]
    arr.forEach(item=>{
        srrNew.push(item.replace('=',':'))
    })
    // console.log(srrNew);
    // 把新数组中的每一项 进行合并得到一个新的字符串
   const newArr= srrNew.join('\r\n')
//    console.log(newArr);
    //  调用
     fs.writeFile('files/成绩-ok.txt',newArr,function(err){
        if(err){
            console.log('写入文件失败'+err);
        }
        console.log('写入成功');
     })
})