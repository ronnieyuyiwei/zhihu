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
        path: '/discovery',
        component: resolve => require(['../pages/discovery.vue'], resolve)
      },
      {
        path: '/question',
        component: resolve => require(['../pages/question.vue'], resolve)
      },
      {
        path: '/answer',
        component: resolve => require(['../pages/answer.vue'], resolve)
      }
    ]
  }
]
