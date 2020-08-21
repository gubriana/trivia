<template>
<div>

<!-- agregar -->

        <div class="card-panel m12 center red">
            <h1 class="header center white-text">Agrega nueva pregunta <span v-if="usuario">{{ usuario.nombre }}</span></h1>
            <br>
            <p class="center white-text">Elige la respuesta por cada pregunta y envía el cuestionario una vez que hayas respondido. Suerte</p>
        </div>
        <div class="card-panel m12 center">
            <div class="row">
                <div class="col m3">
                    <h4>Pregunta</h4>
                </div>
                <div class="input-field col m9">
                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                    <label for="textarea2">Textarea</label>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <p><i class="material-icons">check</i> Respuesta correcta</p>
                </div>
                <div class="input-field col m9">
                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                    <label for="textarea2">Textarea</label>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <p><i class="material-icons">close</i> Respuesta incorrecta</p>
                </div>
                <div class="input-field col m9">
                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                    <label for="textarea2">Textarea</label>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <p><i class="material-icons">close</i> Respuesta incorrecta</p>
                </div>
                <div class="input-field col m9">
                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                    <label for="textarea2">Textarea</label>
                </div>
            </div>
            <div class="row">
                <div class="col m3">
                    <p><i class="material-icons">close</i> Respuesta incorrecta</p>
                </div>
                <div class="input-field col m9">
                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                    <label for="textarea2">Textarea</label>
                </div>
            </div>
        </div>
        <div class="col m12 right-align">
            <button type="button" class="btn-floating btn-large waves-effect waves-light grey"><i class="material-icons">close</i></button>
            <button type="button"  id="enviar-juego" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></button>
        </div>
    </div>
</template>

<script>
export default {
      name: 'Question',
}
</script>

<style>

</style>