<template>
  
<div id="voice">
<VoiceTempLeftGroup/>
<VoiceTempLeftChannel/>
<VoiceTempRight/>
</div>

</template>





<script>


//引入 语音页面模版
import VoiceTempLeftGroup from './voice-temp-leftGroup.vue'
import VoiceTempLeftChannel from './voice-temp-leftChannel.vue'
import VoiceTempRight from './voice-temp-right.vue'

export default {
  name: 'App',
  components: {
    VoiceTempLeftGroup,
    VoiceTempLeftChannel,
    VoiceTempRight
  }
}


</script>

<style>
body {
    line-height: 1;
    margin: 0;
    padding: 0;
    font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif,"\5FAE\8F6F\96C5\9ED1";
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: transparent;
    color: #BFBFBF;
}
a {
    text-decoration: none;
    color: #337ab7;
}
ol, ul {
    margin-top: 0;
    margin-bottom: 10px;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    padding: 10px;
    font-size: 1.2em;
}
li{
    padding: 3px;
    list-style-type:none;
    width: 90%;
    border-radius: 4px;
    padding: 10px;
    /* background-color: #353535; */
    transition:  border-radius .4s, background-color .4s, border .1s, color .2s;
}
button{
    outline:none;
}
</style>