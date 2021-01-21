<template>
  <div id="app">
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>

    <router-view></router-view> -->
    <!-- <p class="ttyys">1212</p>

    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div> -->

    <VoiceTemp />
  </div>
</template>

<script>
//引入 语音页面模版
import VoiceTemp from "./components/voice-temp.vue";

export default {
  name: "App",
  components: {
    VoiceTemp
  },

  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.gid;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};

</script>

<style>
</style>
