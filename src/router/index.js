import { createRouter, createWebHistory } from 'vue-router';
import Intro from '../components/Intro.vue';
import Day from '../components/Day.vue';
import Calendar from '../components/Calendar.vue';
import Setting from '../components/Setting.vue';
import About from '../components/About.vue';

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro,
  },
  {
    path: '/day:date',
    name: 'day',
    component: Day,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
