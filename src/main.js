import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/reset.css'
import Popup from 'vant/lib/popup';
import 'vant/lib/popup/style'

Vue.use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
