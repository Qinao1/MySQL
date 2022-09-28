// 该文件用于创建Vuex中最核心的store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
import countOpations from './count'
import personOpations from './person'
// 应用vuex插件
Vue.use(Vuex)


 

// 创建并暴露store
export default new Vuex.Store({
   modules:{
    a:countOpations,
    b:personOpations
   }
})
// 导出store  暴露store
// export default store