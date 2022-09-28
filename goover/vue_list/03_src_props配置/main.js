// // 引入vue
// import Vue, { h } from 'vue'
// // 引入App
// import App from './App'
// // 关闭VUe生产提示
// Vue.config.productionTip = false

// // 创建vm
// new Vue({
//     el: '#app',
//     render: h => h(App)
// })
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
