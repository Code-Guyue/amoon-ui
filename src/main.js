import Vue from 'vue'
import App from './App.vue'
import AmoonButton from './components/Button.vue'

Vue.config.productionTip = false

Vue.component(AmoonButton.name, AmoonButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
