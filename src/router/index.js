import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Listar from '../components/Estructura/Listar.vue'
import Modificacion from '../components/Estructura/Modificacion.vue'
import Detalles from '../components/Estructura/Detalles.vue'
import Update from '../components/Estructura/Update.vue'
import Login from '../components/Estructura/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Zapatos',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/Modificacion',
    name: 'Modificacion',
    component: Modificacion
  },
  {
    path: '/Listar/Detalles/:id',
    name: 'Detalles',
    component: Detalles,
    props: true,
  },
  {
    path: '/Update',
    name: 'Update',
    component: Update,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
