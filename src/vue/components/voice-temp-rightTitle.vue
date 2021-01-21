<template>
    <div class="right-title">
        <span>{{ RightChannelType }}</span>
        <span>{{ RightChannelTitle }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            RightChannelType: "#",
            RightChannelTitle: "RightChannelName" + this.$route.params.gid,
        };
    },
};
</script>

<style>
.right-title {
    width: 100%;
    height: 50px;
    background: #4a4a4a;
    margin: 0;
    padding: 5px;
}
.right-title span {
    padding-left: 15px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    display: inline;
    line-height: 40px;
}
</style>