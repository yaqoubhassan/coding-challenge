import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import Dashboard from '../pages/Dashboard.vue'
import Analytics from '../components/Analytics.vue'
import Profile from '../components/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/dashboard',
      components: {
        default: Dashboard
      }, children: [
        { path: '', name: 'dashboard', component: Analytics },
        { path: 'profile', component: Profile }
      ]
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
