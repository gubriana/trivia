import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import Questions from '@/components/Questions.vue';
import Game from '@/components/Game.vue';
import NoEncontrada from '@/components/NoEncontrada.vue';

Vue.use(VueRouter); 

const router = new VueRouter({
    routes: [
        {
            path: '/', 
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/questions', 
            component: Questions,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/game', 
            component: Game,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            component: NoEncontrada // Asumiendo que hemos construido un componente NoEncontrada, debe ser la última
        }
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to, from)
    let currentUser = firebase.auth().currentUser;
    console.log('Usuario actual: ', currentUser);
     
    if (to.meta.requiresAuth && currentUser == null) {
        next('login')
    } else {
        next()
    }
   
  })
  
  export default router;