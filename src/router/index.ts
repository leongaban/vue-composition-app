import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      // route level code-splitting
      // this generates a separate chunk (posts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostsView.vue'),
    },
    {
      path: '/postsDetails/:id',
      name: 'postsDetail',
      component: () => import('../views/PostsDetailView.vue'),
    },
  ],
})

export default router
