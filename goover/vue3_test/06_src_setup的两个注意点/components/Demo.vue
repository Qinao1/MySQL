<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的hello事件</button>

</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  emits: ["hello"],
  props: ["msg", "school"],
  setup(props, context) {
    // console.log('setup',props);
    // console.log("setup", context);
    // console.log('setup',context.attrs);//相当于vue2中的$attrs
    // console.log('setup',context.emit);//触发自定义事件的
    console.log('setup',context.slots);//插槽
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });
    // 返回一个对象
    return {
      person,
      test,
    };
    // 方法
    function test() {
      context.emit("hello", 666);
    }
  },
};
</script>

<style>
</style>