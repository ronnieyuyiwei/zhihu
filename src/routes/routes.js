/**
 * Created by YYW on 2017/1/14.
 */
import App from '../App.vue'
export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: resolve => require(['../pages/home.vue'], resolve)
      },
      {
        path: '/home',
        component: resolve => require(['../pages/home.vue'], resolve)
      },
      {
        path: '/smile',
        component: resolve => require(['../pages/smile.vue'], resolve)
      }
    ]
  }
]
