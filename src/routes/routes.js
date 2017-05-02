/**
 * Created by YYW on 2017/1/14.
 */
import App from '../App.vue'
const myCreation = resolve => {
  require.ensure(['../pages/more/children/my-creation.vue'], () => {
    resolve(require('../pages/more/children/my-creation.vue'))
  })
}
const more = resolve => {
  require.ensure(['../pages/more/more.vue'], () => {
    resolve(require('../pages/more/more.vue'))
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
        component: resolve => require(['../pages/login/register.vue'], resolve)
      },
      {
        path: '/login',
        component: resolve => require(['../pages/login/login.vue'], resolve)
      },
      {
        path: '/discovery',
        component: resolve => require(['../pages/discovery.vue'], resolve)
      },
      {
        path: '/ask_question',
        component: resolve => require(['../pages/ask-question.vue'], resolve)
      },
      {
        path: '/question/:id',
        component: resolve => require(['../pages/question/question.vue'], resolve),
        children: [{
          path: 'add_answer',
          component: resolve => require(['../pages/answer/add-answer.vue'], resolve)
        }]
      },
      {
        path: '/test',
        component: resolve => require(['../components/answer/answer-template.vue'], resolve)
      },
      {
        path: '/answer-content',
        component: resolve => require(['../pages/answer/answer-content.vue'], resolve)
      },
      {
        path: 'more',
        component: more,
        children: [
          {
            path: 'my_creation/:id',
            component: myCreation,
            children: [
              {
                path: 'question',
                component: resolve => require(['../components/more/menu-question.vue'], resolve)
              },
              {
                path: 'answer',
                component: resolve => require(['../components/more/gg.vue'], resolve)
              }
            ]
          }
        ]
      },
      {
        name: 'error',
        path: '/error',
        component: resolve => require(['../pages/error/404.vue'], resolve)
      },
      {
        path: '*',
        component: resolve => require(['../pages/error/404.vue'], resolve)
      }
    ]
  }
]
