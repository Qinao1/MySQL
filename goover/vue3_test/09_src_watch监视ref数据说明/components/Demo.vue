<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr />
  <h2>当前的信息为{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h2>薪水{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "Demo",
  /*  watch:{
  vue2
    sum(newValue,oldVValue){
      console.log('sum的值变化了',newValue,oldVValue);
    }
    sum:{
      immediate:true , //立即监听一下
        deep:true ,//深度监视
      hanler(newValue,oldVValue){
        
        console.log('sum的值变化了',newValue,oldVValue);
      }
    } */
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = ref({
      name: "张三",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue);
    })
    watch(person,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue);
    },{deep:true})
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>