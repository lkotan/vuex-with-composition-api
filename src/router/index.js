import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import('../views/Person.vue')
  },
  {
    path: '/person/:id',
    name: 'Edit-Person',
    component: () => import('../views/Person.vue')
  },
  {
    path: '/level',
    name: 'Level',
    component: () => import('../views/Level.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
