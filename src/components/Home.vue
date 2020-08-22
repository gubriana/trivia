<template>
    <div class="row">
        <div class="card-panel m12 center blue">
            <h4 class="header center white-text">¿Te animas a jugar <span v-if="usuario">{{ usuario.nombre }}?</span></h4>
            <br>
              <button class="btn-floating btn-large waves-effect waves-light amber" type="button"><router-link v-bind:to="{ path: '/game' }"><i class="large material-icons">play_arrow</i></router-link></button>
        </div>
        <nav>
            <div class="nav-wrapper grey">
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
                <tr v-for="game in games" :key="game.id">
                    <td>{{game.user}}</td>
                    <td>{{game.score}}</td>
                    <td>{{game.percentage}}%</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { db } from '@/firebase.js'

export default {
    name: 'Home',
    computed: {
        usuario() {
            return this.$store.state.usuario;
        }
    },
    firestore() {
        return {
            games: db.collection('games').orderBy('date', 'desc')
        }
    }    
}
</script>
<style>
#tabla-resultados {
    margin-top: 2rem;
}
</style>   