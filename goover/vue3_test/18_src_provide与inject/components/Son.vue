<template>
  <div class="Son">
    <h2>我是Son组件{{ car.name }}{{ car.price }}</h2>
  </div>
</template>
  
  <script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("car");
    // console.log(car);
    return {
      car,
    };
  },
};
</script>
  
  <style>
.Son {
  background-color: orange;
  padding: 10px;
}
</style>