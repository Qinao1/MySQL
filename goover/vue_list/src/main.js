// 引入Vue
import Vue from 'vue'
// 引入APp
import App from './App.vue'

// 按需引入
import { Button,Row,DatePicker} from 'element-ui';

// 完整引入
// 引入ElementUI 组件库
// import ElementUI from 'element-ui';
// 引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 关闭生产提示
Vue.config.productionTip = false
// 应用ELementUI
// Vue.use(ElementUI);
// 按需应用
Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);
// 创建vm
new Vue({
  render: h => h(App),
}).$mount('#app')