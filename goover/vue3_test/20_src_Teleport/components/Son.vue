<template>
  <div class="Son">
    <h2>我是Son组件</h2>
    <Dialog></Dialog>
  </div>
  
</template>
  
  <script>
    import Dialog from './Dialog';
export default {
  name: "Son",
  components:{Dialog}
};
</script>
  
  <style>
.Son {
  background-color: orange;
  padding: 10px;
}
</style>