import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../views/HelloWorld.vue'
import index from '../views/index.vue'
import watchtime from '../views/watchtime.vue';
import login from '../views/login.vue'
import usermanage from '../views/usermanage.vue'
import Home from '../views/home.vue'
import Forum from '../views/forum.vue'
import papercutting from '../views/papercutting.vue'
import findmis from '../views/findmis.vue'
import question from '../views/question.vue'
import newQuestionList from '../views/newQuestionList.vue'
import basetable from '../views/basetable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component:HelloWorld
      },
      {
        path: '/watchtime',
        name: 'watchtime',
        component:watchtime
      },
      {
        path: '/usermanage',
        name: 'usermanage',
        component:usermanage
      },
      {
        path: '/forum',
        name: 'forum',
        component:Forum
      },
      {
        path: '/papercutting',
        name: 'papercutting',
        component:papercutting
      },
      {
        path: '/findmis',
        name: 'findmis',
        component:findmis
      },
      {
        path: '/question',
        name: 'question',
        component:question
      },
      {
        path: '/newQuestionList',
        name: 'newQuestionList',
        component:newQuestionList
      }
      ,
      {
        path: '/basetable',
        name: 'basetable',
        component:basetable
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:login
  },
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//       let token = localStorage.getItem('token')
//       if (token) {
//         next('/home')
//       } else {
//         next()
//       }
//     }
//     else{
//       let token = localStorage.getItem('token')
//         if (!token) {
//           next('/login')
//         } else {
//           next()
//         }
//     }
//     if(to.path === '/usermanage'){
//       if(sessionStorage.getItem('admin')){
//         next()
//       }else{
//         next('/')
//       }
//     }
// })


export default router
