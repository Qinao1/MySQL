<template>
  <div class="category">
    
    <h3>{{title}}</h3>
    <!-- <ul>
        <li v-for="(item,index) in ListData" :key="index">{{item}}</li>
    </ul> -->
    <!-- 定义一个插槽，（挖个坑，等着组件的使用者进行填充） -->
    <slot>我是一写默认值，当使用者，没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
name:'Category',
props:['title']
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>