import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import FormsPage from '@/pages/FormsPage.vue'
import CardPage from '@/pages/CardPage.vue'
import WebsitePage from '@/pages/WebsitePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/components/buttons', component: ButtonPage },
  { path: '/components/forms', component: FormsPage },
  { path: '/components/cards', component: CardPage },
  { path: '/components/designs', component: WebsitePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
