<template>
    <div class="Child">
      <h2>我是Child组件</h2>
      {{sum}}
    </div>
  </template>
  
  <script>
    import {ref} from 'vue'
  export default {
  name:'Child',
  setup(){
    let sum=ref(0)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({sum})
      },1000)
    })
  }
  }
  </script>
  
  <style>
  .Child{
    background-color: skyblue;
    padding: 10px;
  }
  </style>