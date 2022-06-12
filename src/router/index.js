import Vue from 'vue'
import VueRouter from 'vue-router'
import ConsultarMovimentacao from '../views/movimentacao/ConsultarMovimentacao.vue'
import EditarMovimentacao from "@/views/movimentacao/EditarMovimentacao";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ConsultarMovimentacao',
    component: ConsultarMovimentacao
  },
  {
    path: '/novo',
    name: 'EditarMovimentacao',
    component: EditarMovimentacao
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
