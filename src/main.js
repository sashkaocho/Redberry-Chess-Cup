import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import router from './router';

import BaseDialog from './components/base/BaseDialog.vue';

const store = createStore({
  state() {
    return {
      currentStep: 1,
    };
  },
});

const app = createApp(App);

app.component('base-dialog', BaseDialog);

app.use(store);

app.use(router);

app.mount('#app');
