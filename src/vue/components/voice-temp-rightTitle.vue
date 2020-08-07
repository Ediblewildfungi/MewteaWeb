<template>
    <div class = "right-title">
        <span>{{RightChannelType}}</span>
        <span>{{RightChannelTitle}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            RightChannelType:'#',
            RightChannelTitle:'RightChannelName' + this.$route.params.gid
        }
    }
}
</script>

<style>
.right-title {
    width: 100%;
    height: 50px;
    background: #4A4A4A;
    margin: 0;
    padding: 5px;
}
.right-title  span {
    padding-left: 15px;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    display: inline;
    line-height: 40px;
}
</style>