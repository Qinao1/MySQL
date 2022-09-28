<template>
  <div class="category">
   
    <h3>{{title}}</h3>
    <slot name="haha" :games="games" msg="hello">我是默认的一些内容</slot>   
    
  </div>
</template>

<script>
export default {
name:'Category',
props:['title'],
data() {
    return {
      games: ["红色警戒", "王者", "QQ飞车", "超级玛丽"],
    };
  },
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