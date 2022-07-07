import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/MainPage.vue';
import PersonalInformation from './components/PersonalInformation.vue';
import ChessExperience from './components/ChessExperience.vue';
import CompletedBoarding from './components/CompletedBoarding.vue';
import NotFound from './components/NotFound.vue';

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
