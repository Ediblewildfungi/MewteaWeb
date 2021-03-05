import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Channel = { template: '<div>group {{ $route.params.gid }} Channel{{ $route.params.cid }} </div>' }

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/group/:gid/channel/:cid', component: Channel },
    // { path: '/voice', component: voice }
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
  ]


export default new VueRouter({
  routes,
})




