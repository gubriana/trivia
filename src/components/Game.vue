<template>
    <div>
        <div class="card-panel m12 center amber">
            <h1 class="header center white-text">HOLA <span v-if="usuario">{{ usuario.nombre }}</span></h1>
            <br>
            <p class="center white-text">Elige la respuesta por cada pregunta y envía el cuestionario una vez que hayas respondido. Suerte</p>
        </div>
        <div class="row">
            <div class="col m12 card-panel">
                <h5>1. Aca va la pregunta</h5>
                  <form action="#">
                    <p>
                    <label>
                        <input name="group1" type="radio" checked />
                        <span>Red</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Yellow</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Green</span>
                    </label>
                    </p>
                </form>
            </div>
            <div class="col m12 card-panel">
                <h5>2. Aca va la pregunta</h5>
                  <form action="#">
                    <p>
                    <label>
                        <input name="group1" type="radio" checked />
                        <span>Red</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Yellow</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Green</span>
                    </label>
                    </p>
                </form>
            </div>
            <div class="col m12 card-panel">
                <h5>3. Aca va la pregunta</h5>
                  <form action="#">
                    <p>
                    <label>
                        <input name="group1" type="radio" checked />
                        <span>Red</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Yellow</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Green</span>
                    </label>
                    </p>
                </form>
            </div>
            <div class="col m12 right-align">
                <button type="button" class="btn-floating btn-large waves-effect waves-light grey"><i class="material-icons">close</i></button>
                <button type="button"  id="enviar-juego" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">send</i></button>
            </div>
        </div>
        <!-- FIN Game -->
    </div>
</template>

<script>
export default {
      name: 'Game',
}
</script>

<style>

</style>