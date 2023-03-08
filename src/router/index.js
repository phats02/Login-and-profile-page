import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProfileUpdateView from '../views/ProfileUpdateView.vue'
import ProfileView from '../views/ProfileView.vue'
function isLogged () {
  return (localStorage.getItem('LoggedUser') != null)
}
const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: (to, from, next) => {
      // console.log(isLogged())
      if (!isLogged()) {
        next('/login')
      } else {
        next()
      }
    },
    component: ProfileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: (to, from, next) => {
      // console.log(isLogged())
      if (!isLogged()) {
        next('/login')
      } else {
        next()
      }
    },
    meta: { title: 'Profile' },
    component: ProfileView
  },
  {
    path: '/profile/update',
    name: 'profileUpdate',
    beforeEnter: (to, from, next) => {
      // console.log(isLogged())
      if (!isLogged()) {
        next('/login')
      } else {
        next()
      }
    },
    meta: { title: 'Profile' },
    component: ProfileUpdateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
