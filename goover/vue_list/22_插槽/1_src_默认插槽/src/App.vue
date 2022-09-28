<template>
  <div class="container">
    <Category title="美食" :ListData="foods">
      <img
        src="https://img95.699pic.com/photo/50129/3799.jpg_wh300.jpg"
        alt=""
      />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video
        controls
        src="//video.shipin520.com/videos/23/24/12/a_A90HZiq1eaxv1621232412_10s_v1.mp4"
      ></video>
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
.container {
  display: flex;
  justify-content: space-around;
}

</style>