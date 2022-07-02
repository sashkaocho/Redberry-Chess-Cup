import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/MainPage.vue';
import PersonalInformation from './components/PersonalInformation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/main', components: { default: MainPage } },
    {
      path: '/registration',
      components: { default: PersonalInformation },
    },
  ],
});

export default router;
