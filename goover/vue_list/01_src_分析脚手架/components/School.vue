<template>
  <div class="demo">
    <h2>学校名称{{ schoolName }}</h2>
    <h2>学校地址{{ address }}</h2>
    <button @click="showName">点我提示学校</button>
  </div>
</template>

<script>
// 组件交互相关的代码 (数据，方法等等)
export default {

  name:'School',
  // el: '#root',// 一定不要写el配置项，因为最终所有的组件 都要被一个vm管理 由vm决定服务与哪个容器
  data() {
    return {
      schoolName: "尚硅谷",
      address: "背景",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
}

</script>

<style><!--  -->
/* 组件样式 */
.demo {
background-color: orange;
}
</style>