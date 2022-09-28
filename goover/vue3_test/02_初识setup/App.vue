<template>
  <h1>一个人的信息</h1>
  <h2>姓名{{name}}</h2>
  <h2>年龄{{age}}</h2>
  <h2>性别{{sex}}</h2>
  <button @click="sayHello">说话(vue3所配置的-sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(vue2所配置的-sayWelcome)</button>
  <button @click="test1">测试一下</button>
</template>

<script>
// import {h} from 'vue'

export default {
  name: 'App',
  // 此处只是测试一下setup 暂时不考虑响应式的问题
  data(){
    return {
      sex:'男'
    }
  },
  methods:{
    sayWelcome(){
      alert('欢迎来到尚硅谷学习')
    },
    test1(){
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    }
  },
  setup() {
    // 数据
    let name='张三'
    let age='18'
    // 方法
    function sayHello(){
    alert(`我叫${name},今年${age}岁,你好啊！`)
  }

 /*  return {
    name,
    age,
    sayHello
  } */
  // 返回一个函数，（渲染函数）
  // return ()=>h('h1','尚硅谷')
  }
}
</script>
