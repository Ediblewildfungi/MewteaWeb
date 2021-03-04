<template>
    <div class="right">
        <VoiceTempRightTitle />
        <VoiceTempRightContent />
    </div>
</template>

<script>
//引入 语音页面模版
import VoiceTempRightTitle from "./voice-temp-rightTitle.vue";
import VoiceTempRightContent from "./voice-temp-rightContent.vue";

export default {
    name: "App",
    components: {
        VoiceTempRightTitle,
        VoiceTempRightContent,
    },
};
</script>

<style>
.right {
    width: 100%;
    margin: 0 0 0 310px;
    height: 100%;
    color: #bfbfbf;
    position: fixed;
    background: #3a3536;
}
</style>