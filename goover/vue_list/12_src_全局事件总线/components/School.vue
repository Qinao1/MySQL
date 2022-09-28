<template>
  <div class="school">
    <h2>学校名称：{{ name}}</h2>
    <h2>地址：{{ address }}</h2>
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
  mounted(){
    // console.log('school',this);
    this.$bus.$on('hello',(data)=>{
      console.log('为啥school组件 ,收到了',data);
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
  }
};
</script>
<style scoped>
  .school{
    padding: 5px;
    background-color: skyblue;
  }
</style>

