import components from '@/components/UI';
import VFocus from '@/directives/VFocus';
import router from '@/router/router';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

components.forEach(c => {
  app.component(c.name, c);
});

app.directive('focus', VFocus);

app
  .use(router)
  .mount('#app');
