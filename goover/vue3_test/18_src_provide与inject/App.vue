<template>
  <div class="app">
    <h2>为啥App组件{{ name }}{{ price }}</h2>
    <Child />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child";

export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40w",
    });
    provide("car", car); //给自己的后代组件，传递数据
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>