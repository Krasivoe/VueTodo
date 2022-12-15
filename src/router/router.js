import { createRouter, createWebHashHistory } from 'vue-router';
import homePage from '@/pages/homePage.vue';
import todosPage from '@/pages/todosPage.vue';
import aboutPage from '@/pages/aboutPage.vue';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/todo',
    component: todosPage,
  },
  {
    path: '/about',
    component: aboutPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
