import {createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home.vue';
import postsList from '../pages/posts-list.vue';
import post from '../pages/post.vue';

// import 
// si possono mettere prorietà diverse per ogni pagina
const meta = {
  enterClass : 'animate__animated animate__fadeIn',
  leaveClass : 'animate__animated animate__fadeOutRight',
}

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
      {
        path: '/',
        name: 'home',
        component: home,
        meta
      },
      {
        path: '/postsList',
        name: 'postsList',
        component: postsList,
        meta
      },
      {
        path: '/post/:slug',
        name: 'post',
        component: post,
        meta
      },
    ]
});

export {router};