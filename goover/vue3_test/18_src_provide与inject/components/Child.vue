<template>
    <div class="Child">
      <h2>我是Child组件</h2>
    </div>
    <Son/>
  </template>
  
  <script>
      import Son from './Son'
  export default {
  name:'Child',
  components:{Son}
  }
  </script>
  
  <style>
  .Child{
    background-color: skyblue;
    padding: 10px;
  }
  </style>