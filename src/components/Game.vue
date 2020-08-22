<template>
    <div>
        <div class="card-panel m12 center amber">
            <h1 class="header center white-text">HOLA <span v-if="usuario">{{ usuario.nombre }}</span></h1>
            <br>
            <p class="center white-text">Elige la respuesta por cada pregunta y envía el cuestionario una vez que hayas respondido. Suerte</p>
        </div>
        <form class="row" @submit.prevent="enviarJuego">
            <div class="col m12 card-panel"  v-for="(question,i) in questions.slice(0,3)" :key="question.id">
                <h5>{{question.question}}</h5>
                <p>
                <label>
                    <input :name="question.id" type="radio" :value="question.answers[0].isCorrect ? 'OK': 'NONE'" v-model="form.respuestas[i]"/>
                    <span>{{question.answers[0].answer}}</span>
                </label>
                </p>
                <p>
                <label>
                    <input :name="question.id" type="radio" :value="question.answers[1].isCorrect ? 'OK': 'NONE'" v-model="form.respuestas[i]"/>
                    <span>{{question.answers[1].answer}}</span>
                </label>
                </p>
                <p>
                <label>
                    <input :name="question.id" type="radio" :value="question.answers[2].isCorrect ? 'OK': 'NONE'" v-model="form.respuestas[i]"/>
                    <span>{{question.answers[2].answer}}</span>
                </label>
                </p>
                <p>
                <label>
                    <input :name="question.id" type="radio" :value="question.answers[3].isCorrect ? 'OK': 'NONE'" v-model="form.respuestas[i]"/>
                    <span>{{question.answers[3].answer}}</span>
                </label>
                </p>
            </div>
            <div class="col m12 right-align">
                <button type="button" class="btn-floating btn-large waves-effect waves-light grey"><i class="material-icons">close</i></button>
                <button type="submit" class="btn-floating btn-large waves-effect waves-light amber distancia-botones"><i class="material-icons">send</i></button>
            </div>    
        </form>
        <!-- FIN Game -->
    </div>
</template>

<script>
import { db } from '@/firebase.js'

export default {
    name: 'Game',
    data() {
        return {
            form: {
                respuestas:[]
            },
            porcentaje:'',
        }
    },
    computed: {
        usuario() {
            return this.$store.state.usuario;
        }/* ,
        preguntasDesordenadas() {
            let preguntas = [...this.questions]
            preguntas.sort(() => 0.5 - Math.randon());
            return preguntas
        } */
    },
    methods: {
        enviarJuego() {

            console.log(this.form.respuestas);

            let contador = 0
            let puntaje = ''
            let porcentaje = ''
            for (let i = 0; i < this.form.respuestas.length; i++) {
                if (this.form.respuestas[i] === 'OK') {
                    contador = contador+1
                }    
            }
            console.log(contador);
            
            if (contador == 0) {
                puntaje = '0/3'
            }
            if (contador == 1) {
                puntaje = '1/3'
            }
            if (contador == 2) {
                puntaje = '2/3'
            }
            else if (contador == 3)
                puntaje = '3/3'
            console.log(puntaje);
            
            porcentaje = (contador/3)*100;
            porcentaje = porcentaje.toFixed(1)
            console.log(porcentaje);

            db.collection('games').add({
                percentage: porcentaje,
                score: puntaje
            })
        }
    },
    firestore() {
        return {
            questions: db.collection('questions')
        }
    }
}
</script>

<style scoped>
</style>