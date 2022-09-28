<template>
  <div>
    <h2>学校名称：{{ name | mySlice}}</h2>
    <h2>性别：{{ address }}</h2>
    <button @click="test">点我测试一个hello方法</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京昌平',
    };
  },
  methods:{
    test(){
      this.demo()
    }
  }
};
</script>

