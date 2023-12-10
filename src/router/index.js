import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrimerParcial from '../views/PrimerParcial.vue'
import SegundoParcial from '../views/SegundoParcial.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/primer-parcial',
    name: 'PrimerParcial',
    component: PrimerParcial
  },
  {
    path: '/segundo-parcial',
    name: 'SegundoParcial',
    component: SegundoParcial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
