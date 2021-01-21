import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import  Index from './components/index-temp.vue'
import  IndexMacro from './components/index-macro.vue'

const root = document.createElement('div')
document.body.appendChild(root)


// const Macro = { template: '<div>macro-dmaidjiow</div>' }
const Test = { template: '<div>test</div>' }

//
const routes = [
  { path: '/macro', component: IndexMacro },
  { path: '/test', component: Test }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

new Vue(
  {
    router,
    render: (h) => h(App)
  }
).$mount(root)




