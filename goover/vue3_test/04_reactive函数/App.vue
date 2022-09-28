<template>
  <h1>一人的信息</h1>
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>

  <h3>工作种类 {{ person.job.type }}</h3>
  <h3>爱好{{ person.hobby }}</h3>
  <h3>测试的数据c{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>

</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端",
        salary: "09s",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "paly"],
    });
    // 返回一个对象
    return {
      person,
      changeInfo,
      addSex,
      delectName,
    };
    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 29;
      person.job.type = "UI设计";
      person.job.salary = "34l";
      person.job.a.b.c = 999;
      person.hobby[0] = "学习";
    }
  }
}
</script>
