import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "books" */ '../views/HomeView.vue')
  },
  {
    path: '/books',
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
    path: '/bookInfo/:title',
    name: 'bookInfo',
    component: () => import(/* webpackChunkName: "bookInfo" */ '../views/BookInfoView.vue')
  },
  {
    path: '/comicInfo/:id',
    name: 'comicInfo',
    component: () => import(/* webpackChunkName: "comicInfo" */ '../views/ComicInfoView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "Logout" */ '../views/LogoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
