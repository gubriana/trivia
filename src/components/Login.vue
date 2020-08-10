<template>
    <div class="row">
    <form class="col s5 card-panel" @submit.prevent="ingresar">
      <h4 class="center">Ingresar</h4>
      <div class="divider"></div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input type="email" class="validate" required v-model="ingresarEmail">
          <label for="icon_email">Email</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">vpn_key</i>
          <input type="password" class="validate" required v-model="ingresarPassword">
          <label for="icon_vpn_key">Contraseña</label>
        </div>
        <div class="col s12 ">
          <button class="btn waves-effect waves-light lime right" type="submit" name="action">Ingresar
            <i class="material-icons right white-text">send</i>
          </button>
        </div>
      </div>
    </form>
    <form class="col s5 offset-s2 card-panel" @submit.prevent="registrar">
      <h4 class="center">Registrar cuenta</h4>
      <div class="divider"></div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input type="email" class="validate" required v-model="registrarEmail">
          <label for="icon_email">Email</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">vpn_key</i>
          <input type="password" class="validate" required v-model="registrarPassword">
          <label for="icon_password">Contraseña</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">vpn_key</i>
          <input type="password" class="validate" required v-model="registrarPasswordConfirmar">
          <label for="icon_password">Repetir contraseña</label>
        </div>
        <div class="col s12">
          <button class="btn waves-effect waves-light lime right" type="submit" name="action">Registrar
            <i class="material-icons right white-text ">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
/* import { db } from '../firebase';   */

export default {
  name: 'Login',
  data() {
    return {
      ingresarEmail: '',
      ingresarPassword: '',
      registrarEmail: '',
      registrarPassword:'',
      registrarPasswordConfirmar:''
    }
  },
  methods: {
    ingresar() {
      console.log('Ingresar')
    },
    registrar() {
      console.log('Registrar')
    },
  }
  /*firestore() {           // adding this key/function
      return {
          pets: db.collection('pets')
      }
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  color: #cddc39;
}
.card-panel {
  margin-top: 3em;

} 
</style>
