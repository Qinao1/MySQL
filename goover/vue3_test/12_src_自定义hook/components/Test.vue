<template>
  <h2>为啥test组件</h2>
  <h2>当前点击时，鼠标的坐标为x:{{ point.x }} y:{{ point.y }}</h2>
</template>

<script>
    import  usePoint  from "../hooks/usePoint";
export default {
name:'Test',
setup(){
   let point= usePoint()
   return {
    point
   }
}
}
</script>
