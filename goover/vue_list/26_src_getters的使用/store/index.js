// 该文件用于创建Vuex中最核心的store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)

// 准备actions 用于响应组件中的动作
const actions = {
    /* jia(context,value){
        console.log('actions中的jia被调用了');
        context.commit('JIA',value)
    },
    jian(context,value){
        console.log('actions中的jian被调用了');
        context.commit('JIAN',value)
    }, */
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了', context);
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了', context);
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },
}
// 准备mutations--用于操作数据（state）
const mutations = {
    JIA(state, value) {
        console.log('mutations中的jia被调用了');
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations中的jian被调用了');
        state.sum -= value
    }
}
// 准备state --用于存储数据
const state = {
    sum: 0, //当前的和
}
// 准备getters--用于将sate中的数据 进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
// 导出store  暴露store
// export default store