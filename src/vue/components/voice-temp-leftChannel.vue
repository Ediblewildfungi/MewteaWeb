<template>
    <!-- 左侧的频道列表 -->
    <div class="channel-wrapper">
        <div class="channel-title">
            <span>{{ ChannelTitle }}</span>

            <p class="channel-title-id">{{ ChannelTitleId }}</p>
        </div>

        <div class="channel-invite">
            <span>点击邀请好友加入</span>
            <br />
            <button class="btn" type="button" name="button">复制链接</button>
        </div>

        <div class="channel-content">
            <div class="channel-text">
                <span>文字频道 +</span>
                <div class="channel-text-list">
                    <ul>
                        <li
                            v-for="TextChennel in TextChennels"
                            v-bind:key="TextChennel.name"
                        >
                            # {{ TextChennel.name }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="channel-voice">
                <span>语音频道 +</span>
                <div class="channel-voice-list">
                    <ul>
                        <li
                            v-for="VoiceChennel in VoiceChennels"
                            v-bind:key="VoiceChennel.name"
                        >
                            {{ VoiceChennel.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="channel-voice-info">
            <div class="channel-voice-status">
                <div class="channel-voice-status-left">
                    {{ VoiceStatusOnline }} <br /><span> FFXIV/VC01</span>
                </div>
                <div class="channel-voice-status-right">x</div>
            </div>

            <div class="channel-line"></div>
            <div class="channel-voice-user">{{ VoiceStatusUser }}</div>
        </div>
    </div>
</template>

<script>
const urlHash = document.location.hash;

const urlHashChennelRe = /(?<=channel\u002f).*?(?=\u002f)/g;
const urlHashGroupRe = /(?<=group\u002f).*?(?=\u002f)/g;

const urlHashChennel = urlHash.match(urlHashChennelRe);
const urlHashGroup = urlHash.match(urlHashGroupRe);

export default {
    data() {
        return {
            ChannelTitle: "ChannelTitle",
            ChannelTitleId: this.$route.params.gid,
            TextChennels: [
                { name: "bukeyui" },
                { name: "Nihao" },
                { name: "figjt" },
            ],
            VoiceChennels: [
                { name: "VoiceChennel1" },
                { name: "VoiceChennel2" },
                { name: "VoiceChennel3" },
                { name: "VoiceChennel4" },
            ],
            VoiceStatusOnline: "语音在线中",
            VoiceStatusUser: "#10346584",
        };
    },
};

console.log(urlHashChennel);

console.log(urlHashGroup);
console.log(urlHash);
</script>

<style>
.channel-wrapper {
    width: 230px;
    height: 100%;
    background: #353535;
    margin: 0 0 0 80px;
    position: fixed;
}
.channel-title {
    width: 100%;
    height: 50px;
    background: #353535;
    margin: 0;
    padding: 5px 0;
    box-shadow: 4px 1px 5px #000;
    text-align: center;
}
.channel-title span {
    font-size: 20px;
    color: #fff;
    text-align: center;
    display: inline;
    line-height: 30px;
}
.channel-title-id {
    font-size: 12px;
    color: #8a8a86;
    text-align: center;
    line-height: 1px;
}
.channel-invite {
    height: 150px;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    padding: 10px;
}
.channel-text span {
    line-height: 40px;
}
.channel-invite span {
    line-height: 40px;
}
.channel-invite .btn {
    padding: 6px 10px;
    width: 50%;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #e91e63;
    color: #fff;
    transition: border-radius 0.5s, background-color 0.5s, border 0.5s, color 1s;
}
.channel-invite .btn:hover {
    border-radius: 25px;
    background-color: #fff;
    color: #e91e63;
    transition: border-radius 0.5s, background-color 0.5s, border 0.5s, color 1s;
}
.channel-invite .btn:active {
    border-radius: 25px;
    background-color: #f7c2d4;
    color: #fff;
    transition: border-radius 0.1s, background-color 0.1s, border 0.1s,
        color 0.1s;
}
.channel-content {
    padding: 10px;
}
.channel-text span {
    padding: 10px;
    font-size: 1.2em;
}

.channel-text-list li {
    background-color: #353535;
}

.channel-text-list li:hover {
    color: #ffd7d7;
    background-color: #4a4949;
    border-radius: 15px;
    transition: background-color 0.1s, border 0.1s, color 0.1s;
}

.channel-voice-list li:hover {
    color: #ffd7d7;
    background-color: #4a4949;
    border-radius: 15px;
    transition: border-radius 0.2s, background-color 0.2s, border 0.1s,
        color 0.2s;
}

.channel-voice-info {
    /* padding: 20px 10px; */
    margin: 0 auto;
    bottom: 0px;
    position: absolute;
    width: 100%;
    height: 150px;
    background-color: #2f2f2f;
}
.channel-voice-status {
    padding-top: 20px;
    padding-left: 10px;
    height: 20px;
    color: #8bc34a;
}
.channel-voice-status-left {
    width: 80%;
    float: left;
}
.channel-voice-status span {
    color: #fff;
    text-shadow: 0px 0px 10px #8bc34a;
    font-size: 0.5em;
}
.channel-voice-user {
    padding: 20px 10px;
}
.channel-line {
    margin: 20px 0px;
    height: 2px;
    border-left: 115px solid #8fe696;
    border-right: 115px solid #ffffff;
}
</style>