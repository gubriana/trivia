import Vue from 'vue'
import Vuex from 'vuex'
// son para la autentificación, desde la librería general a la más particular
import firebase from 'firebase/app';
import 'firebase/auth';
import './firebase.js'

import VueFirestore from 'vue-firestore';
import App from './App.vue'
/* import router from '@/router'; */

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueFirestore, {key: 'id'});   // adding this use statement

const store = new Vuex.Store({
  state:{
    usuario: null,
    // mensaje del v-if del componente
    error: null
  },
  mutations: {
    // mutación para cambiar el usuario
    setUsuario(state, nuevoUsuario) {
      state.usuario = nuevoUsuario;
    },

    // mutación para cambiar el error
    setError(state, nuevoError) {
      state.error = nuevoError;
    }
  },
  // acciones reciben un contexto de almacen y los datos
  actions: {
    registrar(context, datos){
      firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password)
      // si el registro funciona
      .then(function(response){
        console.log(response);
        context.commit('setError', null);
        context.commit('setUsuario', datos.email);
        // es para ir al inicio
/*         router.push('/'); */
      })
      // si hay error en el registro
      .catch(function(error){
        context.commit('setError', error.message);
        context.commit('setUsuario', error.null);
      })

    }
  }
});

new Vue({
  render: h => h(App),
/*   router, */
  store
}).$mount('#app')