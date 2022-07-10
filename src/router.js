import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './pages/MainPage.vue';
import PersonalInformation from './pages/PersonalInformation.vue';
import ChessExperience from './pages/ChessExperience.vue';
import CompletedBoarding from './pages/CompletedBoarding.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', name: 'main', component: MainPage },
    {
      path: '/registration',
      name: 'registration',
      component: PersonalInformation,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ChessExperience,
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompletedBoarding,
    },

    { path: '/:notFound(.*)', name: 'notfound', component: NotFound },
  ],
});

export default router;
