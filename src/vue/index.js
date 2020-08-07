import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

const root = document.createElement('div')
document.body.appendChild(root)


new Vue(
  {
    render: (h) => h(App)
  }
).$mount(root)

