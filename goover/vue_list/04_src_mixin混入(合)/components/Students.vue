<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
  </div>
</template>

<script>
  // import { mixin ,mixin2} from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "脏三",
      sex: "男",
    }
  },
  // mixins:[mixin,mixin2]
};
</script>

