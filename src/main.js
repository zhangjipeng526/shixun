import Vue from 'vue'
import App from './App.vue'
import vuer from 'vue-resource'

Vue.config.productionTip = false

Vue.use(vuer)
new Vue({
  render: h => h(App)
}).$mount('#app')


