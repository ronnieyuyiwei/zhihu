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
        path: '/more',
        component: resolve => require(['../pages/more.vue'], resolve)
      },
      {
        path: '/question',
        component: resolve => require(['../pages/question.vue'], resolve)
      },
      {
        path: '/answer',
        component: resolve => require(['../pages/answer.vue'], resolve)
      },
      {
        path: '/answer-content',
        component: resolve => require(['../pages/answer-content.vue'], resolve)
      },
      {
        path: '/smile',
        component: resolve => require(['../pages/smile.vue'], resolve)
      }
    ]
  }
]
