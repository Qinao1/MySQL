<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <!-- <h2>年龄：{{ age * 1 +1}}</h2> -->
    <h2>年龄：{{ MyAge+1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",

  data() {
    console.log(this);
    return {
      msg: "我是一个",
      MyAge:this.age
    };
  },
  methods: {
    updateAge(){
      this.MyAge++
    }
  },
  //简单声明接收
  // props: ["name", "sex", "age"], 

  // 接收的同时，对数据进行类型限制
 /*  props:{
    name:String,
    age:Number,
    sex:String
  } */

  // 接收的同时对数据进行类型显示+默认值的指定+必要性的限制
  props:{
    name:{
      type:String,    //name的类型是字符串
      required:true  //name是必要的
    },
    age:{
      type:Number,
      default:99   //给一个默认值
    },
    sex:{
      type:String,
      required:true
    }
  }
};
</script>

