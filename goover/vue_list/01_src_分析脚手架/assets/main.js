// 该文件，是整个项目的入口文件
// 引入Vue
import { createApp } from 'vue'
// 引入APP组件  它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
// 创建vue实例对象---vm
createApp(App).mount('#app')
