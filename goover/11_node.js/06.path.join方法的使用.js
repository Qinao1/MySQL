const fs=require('fs')
const path=require('path')

// path路径模块
// path模块是node.js官方提供的，用来处理路径的模块，它提供了一系列的方法和属性，用来满足用户对路径的处理需求
// 例如path.join()方法，用来将多个路径片段，拼接成一个完整的路径字符串
// path.basename()方法，用来从路径字符串中，将文件名解析出来
// 如果要在JavaScript代码中，使用path模块来处理路径，需要引入它
// path.join()语法格式
// path.join([...paths])  参数解读  ...paths<string> 路径片段的序列
// 返回值 <string>   注意../会抵消前面的路径
// const pathStr=path.join('/a','/b/c','../../','./d','e')
// console.log(pathStr);//\a\b\d\e
// 注意，今后，凡是涉及到路径拼接的操作，都要用path.join()方法处理，不要直接使用+字符串的拼接
fs.readFile(path.join(__dirname,'/files/1.txt'),'utf8',function(err,dataStar){
    if(err){
        return console.log(err.message)
    }
    console.log(dataStar);
})
// 使用path.basename()方法 可以从一个文件路径中，获取到文件的名称部分
// path.basename(path[,ext])
// path string 必选参数，表示一个路径的字符串
// ext string 可选参数，表示文件扩展名
// 返回 string 表示路径的最后一部分
// 定义文件存放位置
const fpath='/a/b/c/index.html'
const fullName=path.basename(fpath)
console.log(fullName);
const nameWithoutExt=path.basename(fpath,'.html')
console.log(nameWithoutExt);
// 获取路径中的文件扩展名
// path.extname(path)  path 字符串 必选参数，表示一个路径字符串 返回得到的扩展名字字符串
const fext=path.extname(fpath)
console.log(fext);
