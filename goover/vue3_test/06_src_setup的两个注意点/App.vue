<template>
  <Demo @hello="showhellMsg" msg="你好啊" school="尚硅谷">
  <template v-slot:qwe>
    <span>尚硅谷</span>
  </template>
  <template v-slot:dsdf>
    <span>尚硅谷</span>
  </template>
  </demo>
</template>

<script>
import Demo from "./components/Demo";
export default {
  name: "App",
  components: { Demo },
  setup(){
    function showhellMsg(value){
      alert(`你好啊,你触发了hello事件，我收到了参数${value}!`)
    }
    return{
      showhellMsg
    }
  }
};
</script>
