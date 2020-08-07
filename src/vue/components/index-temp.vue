<template>
  <div id="main">
    <Header />

    <video
      id="indexvideo"
      width="100%"
      muted
      src="https://static.moelist.top/nyatea/index-video4.mp4"
      autoplay
      loop
    >
      <source src="https://static.moelist.top/nyatea/index-video4.mp4" type="video/mp4" />
    </video>
    <div class="title">
      <p class="title-text">在喵茶，分享技能、分享快乐</p>
      <p class="title-text2">在这里，你可以感受到愉快的群氛围，分享快乐的游戏体验，还有老司机陪伴，滴滴打鸡，随叫随到，当然，我们的讨论还不仅限于FF14。</p>
    </div>

    <div class="bottom">
      <p class="bottom-text">Copyright © 2016-2020 Mewtea All Rights Reserved.</p>
      <p class="bottom-text2">站点内使用的游戏图片、视频、名称，其版权为SQUARE ENIX所有。</p>
      <p class="bottom-text2">Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.</p>
    </div>

  </div>
</template>

<script>
import Header from "./common-header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  /* background-image: url(https://static.moelist.top/nyatea/user_bucket/03/bg-star.png); */
  background-attachment: fixed;
  /* background-size: 100%; */
  background-repeat: no-repeat;
  font-family: Arial, "Microsoft YaHei";
}

#main {
  background-color: #fff;
  position: absolute;
  height: 100%;
  width: 100%;
  animation: 1s title-animation2;
  animation-fill-mode: forwards;
  animation-delay: 10s;
}
.title {
  height: 300px;
  position: absolute;
  width: 100%;
  padding-top: 20px;
  background-color: #fff;
  animation: 2s title-animation-bg;
  animation-fill-mode: forwards;
  animation-delay: 8s;
}
.title-text {
  text-align: center;
  color: #fff;
  font-size: 60px;
  text-shadow: 0px 0px 18px #fda7c0;
  padding: 20px;
  opacity: 0;
  animation: 4s title-animation-text;
  animation-fill-mode: forwards;
  animation-delay: 9s;
}
.title-text2 {
  text-align: center;
  color: #fff;
  font-size: 22px;
  opacity: 0;
  text-shadow: 0px 0px 14px #ca6d87;
  animation: 4s title-animation-text;
  animation-fill-mode: forwards;
  animation-delay: 11s;
}
.bottom {
  height: 100px;
  height: 100px;
  position: fixed;
  width: 100%;
  padding-top: 20px;
  bottom: 0px;
  background-color: #fff;
  animation: 3s title-animation3;
  animation-fill-mode: forwards;
  animation-delay: 11s;
}
.bottom-text {
  text-align: center;
  color: #fff;
  font-size: 19px;
  text-shadow: 0px 0px 18px #e91e63;
  padding: 12px;
  opacity: 0;
  animation: 2s title-animation-text;
  animation-fill-mode: forwards;
  animation-delay: 12s;
}
.bottom-text2 {
  text-align: center;
  color: #fff;
  font-size: 17px;
  text-shadow: 0px 0px 8px #380315;
  opacity: 0;
  animation: 4s title-animation-text;
  animation-fill-mode: forwards;
  animation-delay: 13s;
}

/* animation */

@keyframes title-animation-bg {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #ffa6c2;
  }
}
@keyframes title-animation2 {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #c7879a;
  }
}
@keyframes title-animation3 {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #8c6571;
  }
}

@keyframes title-animation-text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>