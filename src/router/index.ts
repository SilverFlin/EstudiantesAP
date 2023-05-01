import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../views/HeroSection.vue'
import Dashboard from '../views/Dashboard.vue'
import Content from '../views/Content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/EstudiantesAP/"
    },
    {
      path: '/EstudiantesAP/',
      name: 'home',
      component: HeroSection
    },
    {
      path: '/EstudiantesAP/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/EstudiantesAP/conoce-mas',
      name: 'conoce-mas',
      component: Content
    },
  ]
})

export default router
