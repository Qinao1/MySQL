// mysql start
// 导入mysql模块
const mysql=require('mysql')
// 2建立与mysql数据库的链接关系
const db=mysql.createPool({
    host:'127.0.0.1',//数据库的ip地址
    user:'root',//登录数据库的账号
    password:'Wangle5942',//登录数据库的密码
    database:'my_db_01' //指定要操作哪个数据库
})
// 测试mysql 模块 能否正常工作
/* db.query('select 1',(err,result)=>{
    // mysql模块工作期间报错了
    if(err) return console.log(err.message);
    // 能够成功执行sql语句
    console.log(result);
}) */

// 查询users表中的所有数据
/* const sqlStr='select * from users'
db.query(sqlStr,(err,result)=>{
    if(err) return console.log(err.message);
    console.log(result);//如果执行的是select 查询语句，则执行的结果是数组
}) */

// 向users表中，新增一条数据 其中username的值为 Spider-Man,password 的值为pcc123
// const user={username:'Spider-Man',password:'pcc123'}
// 定义待执行的sql语句
// const sqlStr='insert into users(username,password) values (?,?)'
// 执行sql语句
// db.query(sqlStr,[user.username,user.password],(err,results)=>{
    // if(err) return console.log(err.message);
    // 如果执行的是insert into 插入语句 则 results 是一个对象
    // 可以通过affectedRows 属性，来判断是否插入数据成功
 /*    if(results.affectedRows ===1 ){
        console.log('插入数据成功');
    }
}) */

// 延时插入数据的便捷方式
/* const user={username:'Spid-Man2',password:'pcc4321'}
// 定义待执行的SQL语句
const sqlStr='insert into users set ?'//?占位符
// 执行sql语句
db.query(sqlStr,user,(err,result)=>{
    if(err) return console.log(err.message);
    if(result.affectedRows===1){
        console.log('插入数据成功');
    }
}) */

// 演示如何更新用户的信息
/* const user={id:6,username:'aaa',password:'000'}
// 定义SQL语句
const sqlStr='update users set username=?,password=? where id=?'
//执行sql语句
db.query(sqlStr,[user.username,user.password,user.id],(err,result)=>{
    if(err) return console.log(err.message);
    // 注意，执行了update语句后，执行的结果，也是一个对象，可以通过affectedRows 判断是否成功
    if(result.affectedRows===1){
        console.log('更新成功');
    }
}) */

// 演示更新数据的便捷方式
/* const user={id:6,username:'aaaa',password:'0000'}
// 定义sql语句
const sqlStr='update users set ? where id=?'
db.query(sqlStr,[user,user.id],(err,result)=>{
    if(err) return console.log(err.message);
    if(result.affectedRows===1){
        console.log('更新成功了');
    }
}) */


// 删除id为5的用户
/* const sqlStr='delete from users where id=?'
db.query(sqlStr,5,(err,result)=>{
    if(err) return console.log(err.message);
    // 注意，执行delete语句后，结果也是一个对象，也会包含affectedRows这个属性
    if(result.affectedRows===1){
        console.log('删除数据成功');
    }
}) */


// 标记删除
const sqlStr='update users set status=? where id=?'
db.query(sqlStr,[1,6],(err,result)=>{
if(err) return console.log(err.message);
if(result.affectedRows===1){
    console.log('标记删除成功');
}
})

// mysql end

