<template>
  <div>
    <Student/> 
    <hr>
    <School/>
  </div>
</template>

<script>
// 引入school组件
import School from './components/School.vue'
import Student from "./components/Students.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>
