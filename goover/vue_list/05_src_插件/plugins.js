import Vue from "vue";

export default {
    install(vue,x,y,z) {
        console.log(x,y,z);
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        // 全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在模板，重新被解析时 
            update(element, binding) {
                element.value = binding.value
                element.focus()
            },
        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        // 在Vue原型上添加一个方法 (vm和vc都能用了)
        Vue.prototype.demo=()=>{alert('你好啊')}
    }
}
