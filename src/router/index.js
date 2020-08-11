import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import NoEncontrada from '@/components/NoEncontrada.vue';

Vue.use(VueRouter); 

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Home
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