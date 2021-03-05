<template>
    <div>
        <div class="macro-box" :class="bg" >
            <h3 class="macro-little-title">{{ title }}</h3>
            <hr class="macro-hr" />
            <pre class="macro-code">{{macroCode}}</pre>
            <div class="macro-box-image"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"IndexMacroBox",
    props:["title","macroCode","bg"]
};
</script>


<style>


.macro-box {
    width: 455px;
    /* height: 600px; */
    /* position: absolute; */
    background-size: cover;
    border-radius: 15px;
    padding: 10px;
    margin: 12px;
    margin-bottom: 35px;
}

.macro-box-bg0{
    background: url(https://static.moelist.top/nyatea/macro-box-bg1.jpg) right bottom no-repeat;
}

.macro-box-bg1{
    background: url(https://static.moelist.top/nyatea/macro-box-bg2.jpg) right bottom no-repeat;
}

.macro-box-bg2{
    background: url(https://static.moelist.top/nyatea/macro-box-bg3.jpg) right bottom no-repeat;
}

.macro-box-bg4{
    background: url(https://static.moelist.top/nyatea/macro-box-bg3.jpg) right bottom no-repeat;
}

.macro-little-title {
    left: 60px;
    color: #fffc96;
    padding: 0px 15px;
    margin: 10px;
    /* border-left: 10px solid #ecadcd; */
    /* transform: border-left; */
    animation: littletitle 2s infinite linear;
}
.macro-hr {
    border: 2px solid #fff;
    border-radius: 2px;
    opacity: 0.5;
}
.macro-code {
    padding: 16px;
    color: #fffc96;
    text-shadow: rgb(43, 38, 38) 0px 0px 8px;
    font-family: Arial, "Microsoft YaHei", "FFXIV_Lodestone_SSF";
}

@keyframes littletitle {
    0% {
        border-left: 10px solid #fffc96;
    }
    50% {
        border-left: 10px solid #ecadcd00;
    }
    100% {
        border-left: 10px solid #fffc96;
    }
}
</style>