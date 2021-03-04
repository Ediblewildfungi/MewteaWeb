<template>
    <!-- 左侧的小组列表 -->
    <div class="group-wrapper">
        <div class="group-list">
            <div class="group-main">
                <a href="#">
                    <div class="group-icon">{{ MainGroupIcon }}</div>
                </a>

                <div class="group-main-online">{{ MainGroupOnline }}人在线</div>
            </div>

            <!-- 分割线 -->
            <div class="group-line"></div>

            <div class="group-list">
                <a
                    v-for="GroupIcon in GroupIcons"
                    v-bind:key="GroupIcon.list"
                    href="#"
                >
                    <div class="group-icon">{{ GroupIcon.list }}</div>
                </a>
            </div>

            <!-- 分割线 -->
            <div class="group-line"></div>

            <!-- 设置 -->
            <div class="group-setting">
                <a href="#">
                    <div class="group-icon">设置</div>
                </a>

                <div class="group-main-online">设置</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            MainGroupIcon: "MT",
            MainGroupOnline: "10",
            GroupIcons: [{ list: "K" }, { list: "0" }, { list: "T" }],
        };
    },
};
</script>

<style>
.group-wrapper {
    width: 80px;
    height: 100%;
    background: #2b2b2b;
    margin-top: 0px;
    padding: 0px;
    position: fixed;
}
.group-icon {
    width: 50px;
    height: 50px;
    background-color: #404040;
    margin: 30px 10px 5px 12px;
    border-radius: 50%;
    border: 1px solid #2b2b2b;
    transition: border-radius 0.1s, box-shadow 0.5s, border 0.5s,
        background-color 1s;
    text-align: center;
    line-height: 50px;
    color: #c1c1c1;
    font-size: 20px;
}
.group-icon:hover {
    border-radius: 25%;
    box-shadow: 0px 0px 8px #fff;
    border: 1px solid #5f5f5f;
    background-color: #e91e63;
    transition: border-radius 0.2s, box-shadow 0.5s, border 0.5s,
        background-color 1s;
}
.group-main-online {
    font-size: 14px;
    text-align: center;
}
.group-line {
    margin: 20px 5px;
    height: 2px;
    border-left: 35px solid #424242;
    border-right: 35px solid #424242;
}
</style>