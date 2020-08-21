<template>
<div>

<!-- agregar -->

        <div class="card-panel m12 center red">
            <h1 class="header center white-text">Agregar nueva pregunta</h1>
            <br>
            <p class="center white-text">Elige la respuesta por cada pregunta y envía el cuestionario una vez que hayas respondido. Suerte</p>
        </div>
        <form class="card-panel m12 center" @submit.prevent="agregarPregunta">
            <div class="row">
                <div class="col m3">
                    <h4>Pregunta</h4>
                </div>
                <div class="input-field col m9">
                    <textarea id="ingresoPregunta" class="materialize-textarea" data-length="120" v-model="ingresoPregunta" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <h5><i class="material-icons">check</i> Respuesta correcta</h5>
                </div>
                <div class="input-field col m9">
                    <textarea id="ingresoRespCorrecta" class="materialize-textarea" data-length="120" v-model="ingresoRespCorrecta" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <h5><i class="material-icons">close</i> Respuesta incorrecta 1</h5>
                </div>
                <div class="input-field col m9">
                    <textarea id="ingresoRespIncorrecta1" class="materialize-textarea" data-length="120" v-model="ingresoRespIncorrecta1" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <h5><i class="material-icons">close</i> Respuesta incorrecta</h5>
                </div>
                <div class="input-field col m9">
                    <textarea id="ingresoRespIncorrecta2" class="materialize-textarea" data-length="120" v-model="ingresoRespIncorrecta2" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <h5><i class="material-icons">close</i> Respuesta incorrecta</h5>
                </div>
                <div class="input-field col m9">
                    <textarea id="ingresoRespIncorrecta3" class="materialize-textarea" data-length="120" v-model="ingresoRespIncorrecta3" required></textarea>
                </div>
            </div>
            <div class="col m12 right-align">
                <button type="button" class="btn-floating btn-large waves-effect waves-light grey" @click="cancelarPregunta"><i class="material-icons">close</i></button>
                <button type="submit"  id="agregarPregunta" class="btn-floating btn-large waves-effect waves-light red distancia-botones"><i class="material-icons">add</i></button>
            </div>
        </form>
    </div>
</template>

<script>
import { db } from '@/firebase.js'
export default {
    name: 'Question',
    data() {
        return {
            ingresoPregunta: '',
            ingresoRespCorrecta:'',
            ingresoRespIncorrecta1:'',
            ingresoRespIncorrecta2:'',
            ingresoRespIncorrecta3:''
        }
    },
    methods: {               
        agregarPregunta() {            
            db.collection('questions').add({
                pregunta: this.ingresoPregunta,
                respuesta: this.ingresoRespCorrecta,
                respuestaIncorrecta1: this.ingresoRespIncorrecta1,
                respuestaIncorrecta2: this.ingresoRespIncorrecta2,
                respuestaIncorrecta3: this.ingresoRespIncorrecta3
            })
            // Redireccionar
            .then(() => {
                alert('Agregaste una pregunta')
                // Limpiar fomulario
                this.ingresoPregunta = '';
                this.ingresoRespCorrecta = '';
                this.ingresoRespIncorrecta1 = '';
                this.ingresoRespIncorrecta2 = '';
                this.ingresoRespIncorrecta3 = '';
                this.$router.push('/')
            })
        },
        cancelarPregunta() {   
            this.$router.push('/')
        }
    },
    firestore() {           // adding this key/function
        return {
            questions: db.collection('questions')
        }
    }
}
</script>

<style>
.distancia-botones {
    margin:  1rem 0 1rem 1rem;
}
</style>