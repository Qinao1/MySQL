<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给Scholl组件</button>
  </div>
</template>

<script>
  import  pubsub  from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: '张三',
      sex: "男",
    }
  },
  mounted(){
    // console.log('student',this.x);
  },
  methods: {
    sendStudentName(){
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',666)
    }
  },
 
};
</script>

<style lang="less" scoped>
 
  .student{
    background: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>
