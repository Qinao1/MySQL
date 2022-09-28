<template>
  <div class="school">
    <h2>学校名称：{{ name}}</h2>
    <h2>性别：{{ address }}</h2>
    
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:["getSchoolName"],
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京昌平',
    };
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
};
</script>
<style scoped>
  .school{
    padding: 5px;
    background-color: skyblue;
  }
</style>

