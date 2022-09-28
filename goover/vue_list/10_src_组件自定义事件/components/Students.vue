<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>当前求和为{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">点我把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前student组件的实例对象（vc）</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: '张三',
      sex: "男",
      number:0
    }
  },
  methods: {
    sendStudentName(){
      // 触发student 组件实例身上的atguigu事件 $emit 触发
      this.$emit('atguigu',this.name,666,88,900)
      // this.$emit('demo')
      // this.$emit('click')
    },
    unbind(){
      // 解绑事件     
      this.$off('atguigu')//解绑一个自定义事件
      // this.$off(['atguigu','demo'])//解绑多个个自定义事件
      // this.$off()//解绑所有的自定义事件
    },
    add(){
      console.log('add回调被调用了');
      this.number++
    },
    death(){
    this.$destroy()//销毁了当前的student组件实例 销毁后，所有student实例的自定义事件全部都不奏效了
  }
  },
  
};
</script>

<style lang="less" scoped>
 
  .student{
    background: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>
