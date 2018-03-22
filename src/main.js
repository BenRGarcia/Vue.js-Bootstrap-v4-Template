// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'

// Bootstrap
import 'bootstrap'

// Global scss
import './assets/scss/main.scss'

// Initialize Bootstrap component JS when necessary
// (uncomment popover/tooltip lines as needed)
// eslint-disable-next-line
$(function () {
  // eslint-disable-next-line
  // $('[data-toggle="popover"]').popover()
  // eslint-disable-next-line
  // $('[data-toggle="tooltip"]').tooltip()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
