// 引入Vue
import Vue from 'vue'
// 引入APp
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建vm
new Vue({
  render: h => h(App),
  /* mounted() {
    setTimeout(() => {
      this.$destroy()
    }, 3000);
  }, */
}).$mount('#app')
