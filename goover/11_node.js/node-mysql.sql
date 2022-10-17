-- 通过*把users表中的所有数据查询出来
-- select * from users

-- 从users表中 把username 和password 对应的数据查询出来
-- select username, password from users

-- 向users表中，插入新的数据 username的值为tony stark password的值为098123
-- insert into users (username,password) values ('tony stark','098123')
-- select * from users

-- 将id为4的用户密码，更新成888888
-- update users set password='888888' where id=4
-- select * from users

-- 更新id为2的用户，把用户密码更新为admin123 同时，把用户状态更新为1
-- update users set password='admin123', status=1 where id=2
-- select * from users

-- 删除users表中，id为4的用户
-- delete from users where id=4
-- select * from users

-- 演示 where 子句的使用
-- select * from users where status=1
-- select * from users where id>=2
-- select * from users where username<>'李四'
-- select * from users where username!='李四'

-- 使用 AND 来显示 所有状态为0 切id小于3的用户
-- select * from users where status=0 and id<3

-- 使用OR 来显示 所有状态为1 或username 为张三的用户
-- select * from users where status=1 or username='张三'

-- 对users表中的数据，按照status字段进行升序排序 desc 表示降序 asc表示升序 默认升序
-- select * from users order by status

-- 对users表中的数据 先按照 status进行降序排序 再按照username字母的顺序 进行升序排序
-- select * from users order by status desc, username asc

-- 使用count(*) 来统计状态为0用户的总数量
-- select count(*) from users where status=0

-- 使用AS关键字 给列起别名
-- select count(*) as total from users where status=0
-- select username as uname,password as upwd from users