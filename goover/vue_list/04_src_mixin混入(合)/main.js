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

// 引入vue
import { createApp } from 'vue'
import { Vue } from 'vue'
// 引入App
import App from './App.vue'

// import { hunru,hunru2 } from './mixin';

// Vue.mixin(hunru)

// 创建vm
createApp(App).mount('#app')
