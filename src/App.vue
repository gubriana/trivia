<template>
  <div class="container">
<!--     <router-view /> -->
    <Login />

  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
h1, h2, h3, h4, h5, p, i {
  color: gray
}
html {
  background-color: #eeeeee;
  }
</style>
