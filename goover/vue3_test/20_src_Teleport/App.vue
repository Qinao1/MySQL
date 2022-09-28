<template>
  <div class="app">
    <h2>为啥App组件</h2>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child";

export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>