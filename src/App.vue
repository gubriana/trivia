<template>
  <div>
    <nav class="amber" role="navigation">
        <div class="nav-wrapper container">
          <ul class="left hide-on-med-and-down">
            <li><router-link v-bind:to="{ path: '/' }" v-if="usuario"><i class="material-icons white-text">home</i></router-link></li>
            <li><router-link v-bind:to="{ path: '/questions' }" v-if="usuario"><i class="material-icons white-text">library_add</i></router-link></li>
          </ul>
          <ul class="right hide-on-med-and-down">
              <li><a @click.prevent="salir" v-if="usuario"><i class="material-icons white-text">exit_to_app</i></a></li>
          </ul>
        </div>
    </nav>
    <div class="container" id="bloque-principal">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    usuario() {
        return this.$store.state.usuario;
    }
  },
  methods: {
    salir(){
        this.$store.dispatch('salir')
    }
  }
}
</script>

<style>
h1, h2, h3, h4, h5, p, i {
  color: gray;
}
body {
  font-family: 'Montserrat', Helvetica, sans-serif;
}
#bloque-principal {
  margin-top: 2rem;
}
.distancia-botones {
    margin:  1rem 0 1rem 1rem;
}
</style>
