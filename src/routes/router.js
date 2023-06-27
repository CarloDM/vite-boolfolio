import {createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home.vue';
import postsList from '../pages/posts-list.vue';
// import 

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
      {
        path: '/',
        name: 'home',
        component: home,
      },
      {
        path: '/postsList',
        name: 'postsList',
        component: postsList,
      },
    ]
});

export {router};