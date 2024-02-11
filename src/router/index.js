// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/home',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router

// index.js

import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../components/WelcomeView.vue'
import CurrentPartyView from '../components/CurrentPartyView.vue'

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/party/:id', component: CurrentPartyView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // Utilisez "routes" ici au lieu de "useRoutes"
})

export default router
