<template>
  <h1>一个人的信息</h1>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h3>工作种类 {{job.type}}</h3>
  <h3>薪水{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "App",
  setup() {
    // 数据
    let name =ref( "张三");
    let age = ref(18);
    let job=ref({
      type:'前端',
      salary:'09s'
    })
    // 返回一个对象
    return{
      name,
      age,
      job,
      changeInfo
    }
    // 方法
    function changeInfo(){
      name.value='李四'
      age.value=29
      job.value.type='UI设计'
      job.value.salary='34l'
      // console.log(name,age);
    }
  },
};
</script>
