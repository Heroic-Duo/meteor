import Vue from 'vue';
import Router from 'vue-router';
import {
    index,
    // searchDetails,
    daoJia,
    shiLiao
} from './route'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            meta: {
                title: '庄王殿'
            },
            component: index,
            children: [

            ]
        },
        {
            path: '/daoJia',
            name: 'daoJia',
            meta: {
                title: '道家养生'
            },
            component: daoJia
        },

        {
            path: '/shiLiao',
            name: 'shiLiao',
            meta: {
                title: '食疗养生'
            },
            component: shiLiao
        },


    ]
})