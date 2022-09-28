## 1:vue-cli 脚手架，初始化项目
node+webpack+淘宝镜像

node-modules 文件夹 ：项目依赖文件夹文件夹中的静态资源，webpack进行打包的时候，会原封不到的打包到dist文件夹中
public : 一般放置一些静态资源 （图片） 需要注意，放在public

src文件夹 （程序员代码文件夹）：
   assets文件夹： 一般放置的是静态资源，（一般放置多个组件共用的静态资源），需要注意，放置在assets文件夹里面的静态资源
   在webpack打包的时候，webpack会把静态资源，当做一个模块，打包到js文件里面 
   components 文件夹 一般放置的是非路由组件（或，一些常用的全局组件）

   App.vue :整个项目的唯一的根组件 Vue当做的组件（.vue)
   main.js :程序入口文件也是整个程序当中，最先执行的文件

babel.confi.js ：配置文件，（babel）相关 将es6语法，翻译为es5语法，兼容性更好
package.json文件：项目的身份证，记录项目叫什么，项目当中有哪些依赖，以及怎么运行

package-lock.json 缓存性文件

READ.md 说明性的文件

## 2.项目的其他配置

项目运行的时候，让浏览器自动打开
package.json 
"scripts": {
    "serve": "vue-cli-service serve --open --host=localhost",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

eslint 校验功能 关闭
---在根目录下，创建一个vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,//关闭
  transpileDependencies: true
})


src文件夹简写方法： 配置别名 @  代表src文件夹，这样将来找的时候，方便很多
jssconfig.json配置别名@提示
{
    "compilerOpations":{
        "baseUrl":"./",
        "paths":{
            "@/*":["src/*"]
        }
    }
    "exclude":["node_modules","dist"]
}


## 3项目，路由的分析
vue-router
所谓路由，kv键值对
key:URL(地址栏中的路径)
value：相应的路由组件
