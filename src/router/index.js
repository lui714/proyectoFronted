import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Listar from '../components/Estructura/Listar.vue'
import Insertar from '../components/Estructura/Insertar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Zapatos',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/Insertar',
    name: 'Insertar',
    component: Insertar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
