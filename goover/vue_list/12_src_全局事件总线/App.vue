<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School/>
    <Student/>
  </div>
 
</template>

<script>
// 引入school组件
import School from './components/School.vue';
import Student from "./components/Students.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data(){
    return {
      msg:'你好啊',
    }
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
