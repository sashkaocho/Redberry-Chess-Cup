import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import router from './router';

import BaseDialog from './components/base/BaseDialog.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseBackButton from './components/base/BaseBackButton.vue';
import BaseNextButton from './components/base/BaseNextButton.vue';

import TheKnightCup from './components/layouts/TheKnightCup.vue';

const store = createStore({
  state() {
    return {
      name: '',
      email: '',
      phone: '',
      date: '',
      level: '',
      character: '',
      answer: null,
    };
  },
  mutations: {
    setName(state, value) {
      state.name = value;
    },
    setEmail(state, value) {
      state.email = value;
    },
    setPhone(state, value) {
      state.phone = value;
    },
    setDate(state, value) {
      state.date = value;
    },
    setLevel(state, value) {
      state.level = value;
    },
    setCharacter(state, value) {
      state.character = value;
    },
    setAnswer(state, value) {
      state.answer = value;
    },
  },
});

const app = createApp(App);

app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.component('base-back-button', BaseBackButton);
app.component('base-next-button', BaseNextButton);
app.component('the-knight-cup', TheKnightCup);

app.use(store);

app.use(router);

app.mount('#app');
