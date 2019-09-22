import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routesConfig'

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(VueRouter);

export default router