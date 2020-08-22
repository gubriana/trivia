<template>
    <div>
        <div class="card-panel m12 center amber">
            <h1 class="header center white-text">HOLA <span v-if="usuario">{{ usuario.nombre }}</span></h1>
            <br>
            <p class="center white-text">Elige la respuesta por cada pregunta y envía el cuestionario una vez que hayas respondido. Suerte</p>
        </div>
        <form class="row">
            <div class="col m12 card-panel"  v-for="question in questions.slice(0,3)" :key="question.id">
                <h5>{{question.question}}</h5>
                <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>{{question.answers[0].answer}}</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>{{question.answers[1].answer}}</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group1" type="radio"  />
                    <span>{{question.answers[2].answer}}</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>{{question.answers[3].answer}}</span>
                </label>
                </p>
            </div>
            <div class="col m12 right-align">
                <button type="button" class="btn-floating btn-large waves-effect waves-light grey"><i class="material-icons">close</i></button>
                <button type="button" class="btn-floating btn-large waves-effect waves-light amber distancia-botones"><i class="material-icons">send</i></button>
            </div>        
        </form>
        <!-- FIN Game -->
    </div>
</template>

<script>
import { db } from '@/firebase.js'

export default {
    name: 'Game',
    computed: {
        usuario() {
            return this.$store.state.usuario;
        }
    },
    firestore() {           // adding this key/function
        return {
            questions: db.collection('questions')
        }
    }
}
</script>

<style scoped>
</style>