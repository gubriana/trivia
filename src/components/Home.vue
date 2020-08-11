<template>
    <div>
        <nav class="white" role="navigation">
            <div class="nav-wrapper container">
            <a id="logo-container" href="#" class="gray-text"></a>
            <ul class="right hide-on-med-and-down">
                <!--Si no existe user no muestra el boton -->
                <li><a class="grey-text" @click.prevent="salir" v-if="usuario">SALIR</a></li>
            </ul>
            </div>
        </nav>
        <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot">
                <div class="container">
                    <br><br>
                    <h1 class="header center lime-text text-lighten-2">Bienvenido aquí</h1>
                    <div class="row center">
                    <h5 class="header col s12 light" v-if="usuario">{{ usuario.nombre }}</h5>
                    </div>
                    <br><br>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'Home',
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
</style>   