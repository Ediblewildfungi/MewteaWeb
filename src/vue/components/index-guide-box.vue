<template>
    <div id="gbox" class="gbox-boxcontent">
        <div class="white-box"></div>
        <div class="macro-header">
            <span class="macro-nya-icon"></span>
            <router-link class="guide-close-btn" title="关闭" to="/">
                <span>+</span>
            </router-link>

            <h2 class="macro-title">
                <span class="ro-flower"></span>
                折纸教程
                <span class="ro-flower"></span>
            </h2>
        </div>
        <div class="white-box"></div>
        <div class="guide-text" id="macro">
            <a
                href="https://static.moelist.top/nyatea/Namazu.pdf"
                target="_blank"
            >
                <div class="guide-title">鲶鱼精</div>
            </a>
            <a
                href="https://static.moelist.top/nyatea/Carbuncle.pdf"
                target="_blank"
            >
                <div class="guide-title">宝石兽</div>
            </a>
            <a
                href="https://static.moelist.top/nyatea/Spriggan.pdf"
                target="_blank"
            >
                <div class="guide-title">魔石精</div>
            </a>
            <a
                href="https://static.moelist.top/nyatea/Paissa.pdf"
                target="_blank"
            >
                <div class="guide-title">猴面雀</div>
            </a>
        </div>
        
        <div class="white-box"></div>
        <component v-bind:is="currentTabComponent"></component>
    </div>
</template>

<script>
export default {};
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

.white-box {
    height: 2%;
}
.gbox-boxcontent {
    margin: 0;
    position: absolute;
    background: #ffffffd1;
    width: 700px;
    height: 80%;
    right: 25px;
    bottom: 35px;
    z-index: 1;
    /* opacity: 0.9; */
    border: 8px solid #e65297;
    border-radius: 30px;
    box-shadow: #8c657142 10px 18px 0px;
    transition: width 2s;
    animation: gboxcontent 1s;
    animation-timing-function: cubic-bezier(0.83, 0.01, 0.15, 0.99);
    z-index: 99;
}
.guide-close-btn {
    right: 20px;
    top: -24px;
    position: absolute;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    background-color: #e65297;
    width: 32px;
    height: 32px;
    text-align: center;
    font-size: 30px;
    transform: rotate(45deg);
    transform-origin: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    transition: transform 0.5s;
}
.macro-nya-icon {
    left: 20px;
    top: -24px;
    position: absolute;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    background-color: #e65297;
    width: 32px;
    height: 32px;
    text-align: center;
    font-size: 30px;
    transform: rotate(45deg);
    transform-origin: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    transition: transform 1s;
    animation: macro-nya-icon 12s infinite cubic-bezier(0.42, 0, 0, 1.01);
}
.guide-close-btn:hover {
    transition: transform 0.3s;
    transform: rotate(0deg);
}
.ro-flower {
    display: inline-block;
    transform-origin: center;
    margin: 0px 20px;
    animation: ro-flower 2s infinite linear;
}
.guide-title {
    margin: 15px auto;
    height: 100px;
    width: 100px;
    padding: 10px;
    text-align: center;
    background-color: #e65297;
    color: #ffffff;
    /* margin: 15px; */
    text-align: center;
    color: #ffffff;
    border-radius: 100px;
    padding: 15px;
    transition: box-shadow 0.2s,border-radius 0.2s, width 0.5s,margin 0.2s,font-size 0.1s;
    box-shadow: 3px 3px 3px #00000038;
    line-height: 100px;
    font-size: 15px;
}
.guide-title:hover {
    /* background-color: #ecb7d0; */
    box-shadow: 10px 10px 3px #8c657142;
    border-radius: 15px;
    width: 530px;
    font-size: 55px;
    transition: box-shadow 0.5s,border-radius 0.5s, width 0.5s,font-size 1s;
}
.macro-header {
    height: 12%;
    background-color: #e65297;
    background-size: cover;
    border-radius: 15px;
    box-shadow: #8c657142 6px 7px 3px;
    margin: 0 12px;
    align-items: center;
    display: flex;
    transition: background-color 1s;
    
}
.macro-header:hover {
    background-color: #eb6ca7;
    transition: background-color 1s;
}

.macro-header:active {
    background-color: #e652a0;
    transition: background-color 1s;
}
.guide-text {
    width: 700px;
    height: 82%;
    overflow-y: auto;
    overflow-x: hidden;
    transition: width 2s;
    border-radius: 15px;
    animation: gboxcontent2 1s;
    animation-timing-function: cubic-bezier(0.83, 0.01, 0.15, 0.99);
}
.macro-text::-webkit-scrollbar {
    width: 8px;
    height: 1px;
}
.macro-text::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #fbb2d4;
    /* box-shadow: #000 0px 10px 5px; */
    background-size: cover;
}
.macro-text::-webkit-scrollbar-track {
    background: #e65297;
    border-radius: 5px;
}

@keyframes gboxcontent {
    from {
        opacity: 0;
        /* width: 800px; */
        /* height: 80%; */
    }
    to {
        opacity: 1;
        /* width: 700px; */
        /* height: 80%; */
    }
}
@keyframes gboxcontent2 {
    from {
        opacity: 0;
        width: 20px;
        height: 10%;
    }
    to {
        opacity: 1;
        width: 700px;
        height: 80%;
    }
}
@keyframes ro-flower {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes macro-nya-icon {
    0% {
        transform: rotate(45deg);
    }
    94% {
        transform: rotate(45deg);
    }
    96% {
        transform: rotate(0deg);
    }
    98% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(45deg);
    }
}
</style>