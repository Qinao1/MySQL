<template>
  <div class="container">
    <Category title="美食" :ListData="foods">
      <img
        src="https://img95.699pic.com/photo/50129/3799.jpg_wh300.jpg"
        alt=""
        slot="center"
      />
      <a href="#" slot="bottom">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="bott" slot="bottom">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video 
      slot="center"
        controls
        src="//video.shipin520.com/videos/23/24/12/a_A90HZiq1eaxv1621232412_10s_v1.mp4"
      ></video>
      <template v-slot:bottom>
        <div class="bott" >
        <a href="#">经典</a>
        <a href="#">热门</a>
        <a href="#">推荐</a>
      </div>
        <h4>欢迎前来观影</h4>
      </template>
     
      
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "牛排", "小龙虾", "烧烤"],
      games: ["红色警戒", "王者", "QQ飞车", "超级玛丽"],
      films: ["《dsaohdosa》", "《231》", "《是多少》", "《你好厉害呀》"],
    };
  },
};
</script>
<style scoped>
.container,
.bott {
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>