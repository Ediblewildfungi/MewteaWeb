import Vue from 'vue'
import App from './Voice.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
// import VueAxios from 'vue-axios'
const root = document.createElement('div')
document.body.appendChild(root)

const Channel = { template: '<div>group {{ $route.params.gid }} Channel{{ $route.params.cid }} </div>' }

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/group/:gid/channel/:cid', component: Channel },
  // { path: '/voice', component: voice }
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})


const app = new Vue({
  router,
  render: (h) => h(App)
  ,mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }


}).$mount(root)

