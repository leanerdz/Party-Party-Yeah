import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../components/WelcomeView.vue'
import CurrentPartyView from '../components/CurrentPartyView.vue'

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/party/:id', name: 'party', component: CurrentPartyView, props: true }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

