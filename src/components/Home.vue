<template>
    <div class="row">
        <div class="card-panel m12">
            <h3 class="header center light lime-text text-lighten-2">Este es tu muro <span v-if="usuario">{{ usuario.nombre }}</span></h3>
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
    }
    
}
</script>
<style>
</style>   