<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCar">获取汽车</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://127.0.0.1:8000/student").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCar(){
      axios.get("http://127.0.0.1:8000/student").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    }
  },
};

</script>