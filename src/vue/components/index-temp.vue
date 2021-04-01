<template>
    <div id="main">
        <Header />

        <!-- <router-link to="/test">Go to Bar</router-link> -->
        <div class="transition-ex">
            <router-view></router-view>
        </div>

        <video
            id="indexvideo"
            width="100%"
            muted
            src="https://static.moelist.top/nyatea/index-video5.mp4"
            autoplay
            loop
        >
            <source
                src="https://static.moelist.top/nyatea/index-video5.mp4"
                type="video/mp4"
            />
        </video>
        <div class="title">
            <p class="title-text">在喵茶，分享技能、分享快乐</p>
            <p class="title-text2">
                在这里，你可以感受到愉快的群氛围，分享快乐的游戏体验，还有老司机陪伴，滴滴打鸡，随叫随到，当然，我们的讨论还不仅限于FF14。
            </p>
        </div>

        <div class="bottom">
            <p class="bottom-text">
                Copyright © 2016-2020 Mewtea All Rights Reserved.
            </p>
            <p class="bottom-text2">
                站点内使用的游戏图片、视频、名称，其版权为SQUARE ENIX所有。
            </p>
            <p class="bottom-text2">
                Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights
                Reserved.
            </p>
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
@font-face {
    font-family: "FFXIV_Lodestone_SSF";
    src: url("https://static.moelist.top/nyatea/FFXIV_Lodestone_SSF.woff")
        format("woff");
    /* src: url("/lds/pc/global/fonts//FFXIV_Lodestone_SSF.eot?t=1592321622#iefix") format("eot"), url("/lds/pc/global/fonts//FFXIV_Lodestone_SSF.woff?t=1592321622") format("woff"), url("/lds/pc/global/fonts//FFXIV_Lodestone_SSF.ttf?t=1592321622") format("truetype"), url("/lds/pc/global/fonts//FFXIV_Lodestone_SSF.svg?t=1592321622#FFXIV_Lodestone_SSF") format("svg"); */
    font-weight: 400;
    font-style: normal;
}

body {
    /* background-image: url(https://static.moelist.top/nyatea/user_bucket/03/bg-star.png); */
    background-attachment: fixed;
    /* background-size: 100%; */
    background-repeat: no-repeat;
    font-family: Arial, "Microsoft YaHei", "FFXIV_Lodestone_SSF";
    /* color: #3399ff; */
}
a {
    text-decoration: none;
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
.transition-ex {
    animation: transition-boxcontent 1s;
    animation-timing-function: cubic-bezier(0.83, 0.01, 0.15, 0.99);
}

::-webkit-scrollbar {
    width: 3px;
    height: 1px;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #fbb2d4;
    /* box-shadow: #000 0px 10px 5px; */
    background-size: cover;
}
::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 5px;
}

/* animation */

@keyframes title-animation-bg {
    0% {
        background-color: #fff;
    }
    100% {
        background-color: #e88eb8;
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

@keyframes transition-boxcontent {
    from {
        opacity: 1;
        width: 500px;
        height: 80%;
    }
    to {
        opacity: 0;
        width: 20px;
        height: 10%;
    }
}
</style>