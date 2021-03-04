<template>
  <div id="app">

  <IndexTemp />
    
  </div>

</template>

<script>

//引入 首页页面模版
import IndexTemp from './components/index-temp.vue'

export default {
  name: 'App',
  components: {
    IndexTemp
  },
    methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
}

</script>

<style>

</style>
