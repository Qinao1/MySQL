<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>性别：{{ address }}</h2>
  </div>
</template>

<script>
  // 引入一个混合
  // import { mixin , mixin2} from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name:'尚硅谷',
      address:'北京昌平',
      x:555
    };
  },
  // mixins:[mixin,mixin2]
};
</script>

