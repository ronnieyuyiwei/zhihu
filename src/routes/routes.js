/**
 * Created by YYW on 2017/1/14.
 */
import App from '../App.vue'
const myCreation = resolve => {
  require.ensure(['../pages/my-creation.vue'], () => {
    resolve(require('../pages/my-creation.vue'))
  })
}
const more = resolve => {
  require.ensure(['../pages/more.vue'], () => {
    resolve(require('../pages/more.vue'))
  })
}
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
        path: '/register',
        component: resolve => require(['../pages/register.vue'], resolve)
      },
      {
        path: '/login',
        component: resolve => require(['../pages/login.vue'], resolve)
      },
      {
        path: '/discovery',
        component: resolve => require(['../pages/discovery.vue'], resolve)
      },
      {
        path: 'more',
        component: more,
        children: [
          {
            path: 'my_creation',
            component: myCreation,
            children: [
              {
                path: 'question',
                component: resolve => require(['../components/more/menu-question.vue'], resolve)
              }
            ]
          }
        ]
      }
    ]
  }
]
