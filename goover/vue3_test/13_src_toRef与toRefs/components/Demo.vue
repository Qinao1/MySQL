<template>
  <h4>{{person}}</h4>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>薪水{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive ,toRef,toRefs} from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // const name1=person.name
    // console.log(name1);

    // const name2=toRef(person,'name')
    // console.log(name2);
    return {
      person,
     ...toRefs(person)
      // name:toRef(person,'name') ,
      // age: toRef(person,'age'),
      // salary: toRef(person.job.j1,'salary'),
    };
  },
};
</script>

<style>
</style>