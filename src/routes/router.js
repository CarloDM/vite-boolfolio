import {createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home.vue';
// import 

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: home,
      },

    ]
});

export {router};