import { reactive,onMounted ,onBeforeUnmount} from "vue";
export default function(){
    // 实现鼠标点击相关的数据
let point = reactive({
    x: 0,
    y: 0,
  });
//   实现鼠标点击相关的方法
  function seavePoint(event) {
    
      point.x = event.pageX;
      point.y = event.pageY;
      console.log(event.pageX,event.pageY);
    
  }
//   鼠标点击相关的钩子
  onMounted(() => {
    window.addEventListener("click", seavePoint);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", seavePoint);
  });
  return point
}