import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'books',
    component: () => import(/* webpackChunkName: "books" */ '../views/BooksView.vue')
  },
  {
    path: '/manga',
    name: 'manga',
    component: () => import(/* webpackChunkName: "manga" */ '../views/MangaView.vue')
  },
  {
    path: '/marvel',
    name: 'marvel',
    component: () => import(/* webpackChunkName: "marvel" */ '../views/MarvelView.vue')
  },
  {
    path: '/mangaInfo/:id',
    name: 'mangaInfo',
    component: () => import(/* webpackChunkName: "mangaInfo" */ '../views/MangaInfoView.vue')
  },
  {
    path: '/bookInfo/:id',
    name: 'bookInfo',
    component: () => import(/* webpackChunkName: "bookInfo" */ '../views/BookInfoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
