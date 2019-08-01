import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import DrawingBoard from '../packages/index'
Vue.use(DrawingBoard)

new Vue({
  render: h => h(App),
}).$mount('#app')
