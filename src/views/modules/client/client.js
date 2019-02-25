import Vue from 'vue'
import Client from './client.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(Client)
}).$mount('#client')
