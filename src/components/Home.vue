<template>
    <div class="row">
        <div class="card-panel m12 center">
            <h4 class="header center grey-text">¿QUIERES JUGAR? <span v-if="usuario">{{ usuario.nombre }}</span></h4>
            <br>
              <button class="btn-floating btn-large waves-effect waves-light red" type="submit"><i class="large material-icons">play_arrow</i></button>
        </div>
        <nav>
            <div class="nav-wrapper blue">
                <form>
                    <div class="input-field">
                        <input id="search" type="search" required>
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
        
        <table id="tabla-resultados" class="striped highlight centered responsive-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Puntaje</th>
                    <th>Porcentaje</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tami</td>
                    <td>1/3</td>
                    <td>33%</td>
                </tr>
                <tr>
                    <td>Tomi</td>
                    <td>2/3</td>
                    <td>66%</td>
                </tr>
                <tr>
                    <td>Timi</td>
                    <td>3/3</td>
                    <td>100%</td>
                </tr>
            </tbody>
        </table>
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
#tabla-resultados {
    margin-top: 2rem;
}
#enviar-juego {
    margin:  1rem 0 1rem 1rem;
}
</style>   