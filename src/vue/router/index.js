import Vue from 'vue'
import VueRouter from 'vue-router'
import  IndexMacro from '../components/index-macro.vue'
import  CBox from '../components/index-guide-box.vue'
import Poki from '../components/index-poki-box.vue'
import Yonkoma from '../components/index-yonkoma-box.vue'
Vue.use(VueRouter)

const Test = { template: '<div>test</div>' }



const routes = [
    { path: '/macro', component: IndexMacro },
    { path: '/guide', component: CBox },
    { path: '/miq', component: Poki },
    { path: '/yonkoma', component: Yonkoma },
    { path: '/test', component: Test }
  ]



export default new VueRouter({
  routes,
})





