<template>
  <div class="school">
    <h2>学校名称：{{ name}}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
  // 引入一个下载过的库 pubsub 有两个api subscribe 订阅 student那个是发布publish hello是名字
  import  pubsub  from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京昌平',
    };
  },
  methods: {
    demo(mag,data){
      console.log('heelo消息收到了',data);
    }
  },
  mounted(){
    // console.log('school',this);
    /* this.$bus.$on('hello',(data)=>{
      console.log('为啥school组件 ,收到了',data);
    }) */
   /* this.pubId= pubsub.subscribe('hello',(msg,data)=>{//这里能收到两个参数，第二个才是真正的数据
    console.log(this);
      // console.log('有人发布了hello消息,hello消息的回调执行了',msg,data);
    }) */
    this.pubId= pubsub.subscribe('hello',this.demo)
  },
  beforeDestroy(){
    // this.$bus.$off('hello')
    pubsub.unsubscriibe(this.pubId)
  }
};
</script>
<style scoped>
  .school{
    padding: 5px;
    background-color: skyblue;
  }
</style>

