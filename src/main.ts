import { createApp } from 'vue';
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { createI18n } from 'vue-i18n';


import App from './App.vue';
import './styles/base.css';

// Router
import { Router } from '/@/router';

// i18n
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'en',
  messages,
});

const app = createApp(App);

app.use(i18n);

app.use(Router);

app.mount('#app');
