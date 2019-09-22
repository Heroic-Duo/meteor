export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '庄王殿'
    },
    component: import ( /* webpackChunkName: "regimen" */ '@pages/index'),
    children: [

    ]
  },
  {
    path: '/daoJia',
    name: 'daoJia',
    meta: {
      title: '道家养生'
    },
    component: import ( /* webpackChunkName: "xueJia" */ '@pages/xuejia')
  },
  {
    path: '/shiLiao',
    name: 'shiLiao',
    meta: {
      title: '食疗养生'
    },
    component: import ( /* webpackChunkName: "shiLiaoshiPu" */ '@pages/shiLiao')
  }
]