// 引入Vue
import Vue from 'vue'
// 引入APp
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// 引入 store 
import store from './store/index'
//使用插件
Vue.use(vueResource)//vm vc身上都多了个东西$(http)


// 关闭生产提示
Vue.config.productionTip = false
// 创建vm
new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')