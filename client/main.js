import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import VueTracker from 'vue-meteor-tracker'
import VueLazyload from 'vue-lazyload'

import store from '@client/store'
import router from '@client/router'
import App from '@client/App.vue'
import Iview from './assets/iview'

import 'iview/dist/styles/iview.css'

Vue.use(VueTracker)
Vue.use(Iview)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/logo.png',
  loading: './assets/images/logo.png',
  attempt: 1
})

Meteor.startup(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('app')
})
