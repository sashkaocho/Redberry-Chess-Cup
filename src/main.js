import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import BaseDialog from './components/base/BaseDialog.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseBackButton from './components/base/BaseBackButton.vue';
import BaseNextButton from './components/base/BaseNextButton.vue';

import TheKnightCup from './components/layouts/TheKnightCup.vue';

const app = createApp(App);

app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.component('base-back-button', BaseBackButton);
app.component('base-next-button', BaseNextButton);
app.component('the-knight-cup', TheKnightCup);

app.use(store);

app.use(router);

app.mount('#app');
