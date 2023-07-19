import { createApp } from 'vue';
import { router } from './routes/router';
import App from './App.vue';
import 'animate.css';



createApp(App).use(router).mount('#app')
