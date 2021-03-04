import Vue from 'vue'
import VueRouter from 'vue-router'
import  IndexMacro from '../components/index-macro.vue'

Vue.use(VueRouter)

const Test = { template: '<div>test</div>' }



const routes = [
    { path: '/macro', component: IndexMacro },
    { path: '/test', component: Test }
  ]



export default new VueRouter({
  routes,
})





