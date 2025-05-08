import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import FormsPage from '@/pages/FormsPage.vue'
import CardPage from '@/pages/CardPage.vue'
import WebsitePage from '@/pages/WebsitePage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/components/buttons', component: ButtonPage },
  { path: '/components/forms', component: FormsPage },
  { path: '/components/cards', component: CardPage },
  { path: '/components/designs', component: WebsitePage },
  { path: '/components/Projects', component: ProjectPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
