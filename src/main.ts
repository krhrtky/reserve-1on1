import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import Vuelidate from 'vuelidate'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
dayjs.locale('ja')
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
