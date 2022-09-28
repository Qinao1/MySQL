<template>
    <div class="demo">
      <h2>学生姓名{{ Name }}</h2>
      <h2>学校地址{{ age }}</h2>
    </div>
  </template>
  
  <script>

  export default {
    name:'Student',
    data() {
      return {
        Name: "尚硅谷",
        age: 12,
      };
    },
  }
  
  </script>