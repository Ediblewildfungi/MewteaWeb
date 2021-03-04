import Vue from 'vue'
import App from './app.vue'
import router from './router/index'

// use axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const root = document.createElement('div')
document.body.appendChild(root)

new Vue(
  {
    router,
    render: (h) => h(App),
  }
).$mount(root)






