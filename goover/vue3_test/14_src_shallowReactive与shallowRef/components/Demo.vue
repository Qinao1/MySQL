<template>
  <h4>当前的x值是{{x.y}}</h4>
  <button @click="x={y:888}">点我替换</button>
  <button @click="x.y++">点我x.y++</button>
  <hr>
  <h4>{{person}}</h4>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>薪水{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive ,ref,toRefs,shallowReactive,shallowRef} from "vue";
export default {
  name: "Demo",
  setup() {
    // 只考虑第一层次的数据响应式
    // let person = shallowReactive({
    let person = reactive({
      name: "张三",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    let x=shallowRef({
      y:0
    })
    console.log(x);
    return {
      x,
      person,
     ...toRefs(person)
    };
  },
};
</script>

<style>
</style>