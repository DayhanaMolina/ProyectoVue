import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/InicioView.vue'
import DiaDetalles from '../views/DiaDetalles.vue'


const routes = [{
        path: '/Inicio',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/Detalles',
        name: 'Detalles',
        component: DiaDetalles,
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router