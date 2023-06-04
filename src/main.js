import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
