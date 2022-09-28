<template>
  <div class="demo">
    <h2 class="title">学校名称：{{ name}}</h2>
    <h2>性别：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京昌平',
    };
  },
};
</script>
<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>

