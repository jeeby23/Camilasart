import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import portfolio from '../views/portfolio.vue'
import customer from '../views/customer.vue'
import instructions from '../views/instructions.vue'
import contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import( '../views/portfolio.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import( '../views/customer.vue')
  },
  {
    path: '/instructions',
    name: 'instructions',
    component: () => import( '../views/instructions.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
