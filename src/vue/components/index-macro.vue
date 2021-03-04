<template>
    <div class="right-boxcontent">
        <router-link title="macro" to="/"><span>close</span></router-link>

        <div class="macro-text" id="demo">
            <h2 class="macro-title">常用宏</h2>

            <h3 class="macro-little-title">优雷卡</h3>
            <pre class="macro-code">
/micon 任务指令1
/ac 任务指令1  &lt;wait.8&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/ac 任务指令1  &lt;wait.9&gt;
/e 快没啦，还有1次 &lt;se.9&gt; 
/ac 任务指令1  &lt;wait.8&gt;
/ac 任务指令1  
/e 反射宏即将结束，请按下一个 &lt;se.8&gt; 

        </pre
            >
        </div>
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
.macro-code {
    font-family: Arial, "Microsoft YaHei", "FFXIV_Lodestone_SSF";
}

.macro-title {
    text-align: center;
    color: #ffa6c2;
    padding: 12px;
}
.macro-little-title {
    color: #ffa6c2;
    padding: 10px;
}
.right-boxcontent {
    margin: 0;
    position: absolute;
    background: #fff;
    width: 500px;
    height: 80%;
    right: 25px;
    bottom: 25px;
    z-index: 1;
    opacity: 0.89;
    border: 8px solid #ffa6c2;
    border-radius: 15px;
    box-shadow: #000 1px 1px 15px;
    overflow: auto;
}
.macro-text {
    padding: 15px;
}
.right-boxcontent {
    transition: width 2s;
    animation: boxcontent 1s;
    animation-timing-function: cubic-bezier(0.83, 0.01, 0.15, 0.99);
}

@keyframes boxcontent {
    from {
        opacity: 0;
        width: 20px;
        height: 10%;
    }
    to {
        opacity: 1;
        width: 500px;
        height: 80%;
    }
}
</style>