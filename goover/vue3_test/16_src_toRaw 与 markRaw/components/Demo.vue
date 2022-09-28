<template>
  <h4>当前的求和为{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>薪水{{ job.j1.salary }}</h2>
  <h3 v-show="person.car">汽车{{ person.car }}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
  <button @click="showRowPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="person.car.price++">换车价格</button>
</template>

<script>
import { reactive ,ref,toRefs ,toRaw,markRaw} from "vue";
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
   function showRowPerson(){
    const p=toRaw(person)
    p.age++
    console.log(p);
   }
   function addCar(){
    let car={name:'奔驰',price:'40'}
    person.car=markRaw(car)
   }
    return {
    sum,
    person,
    addCar,
    showRowPerson,
     ...toRefs(person)
    };
  },
};
</script>

<style>
</style>