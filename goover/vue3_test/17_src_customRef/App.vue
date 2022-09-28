<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义ref ---名为 myRef
    function myRef(value,delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人读取了myref数据了,把${value}给他了`);
            track(); //通知vue追踪数据的变化，(提取和get说，，让他认为这个value是有用的)
            return value;
          },
          set(newValue) {
            console.log(`有人修改了了myref数据了,改为了${newValue}`);
            clearTimeout(timer)
           timer= setTimeout(() => {
              value = newValue;
              trigger(); //通知vue重新解析模板
            }, delay);
          },
        };
      });
    }
    //let keyWord=ref('hello')//使用vue提供的内置的ref
    let keyWord = myRef("hello",500); //使用自定义的内置的ref //函数的调用，可以在定义之前
    return {
      keyWord,
    };
  },
};
</script>
