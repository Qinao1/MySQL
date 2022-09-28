<template>
  <h4>当前的求和为{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>薪水{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive ,ref,toRefs,readonly,shallowReadonly} from "vue";
export default {
  name: "Demo",
  setup() {
      let sum=ref(0)
    let person = reactive({
      name: "张三",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // person=readonly(person)
    // person=shallowReadonly(person)
    // sum=readonly(sum)
    // sum=shallowReadonly(sum)
    return {
    sum,
     ...toRefs(person)
    };
  },
};
</script>

<style>
</style>