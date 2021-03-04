import Vue from 'vue'
import App from './Voice.vue'
import router from './router/voice'
import axios from "axios";

const root = document.createElement('div')
document.body.appendChild(root)

const app = new Vue({
  router,
  render: (h) => h(App)
  ,mounted () {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response.data.bpi))
  }


}).$mount(root)

