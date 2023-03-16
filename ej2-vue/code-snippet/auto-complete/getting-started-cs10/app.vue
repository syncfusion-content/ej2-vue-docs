

<template>
    <div id="app">
     <div class='autocomplete'>
        <ejs-autocomplete :dataSource='data' :ignoreAccent='ignoreAccent'
        :placeholder="waterMark" ></ejs-autocomplete>
      </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);

export default {
  name: 'app',
   data () {
    return {
      data: [
                'Aeróbics',
                'Aeróbics en Agua',
                'Aerografía',
                'Aeromodelaje',
                'Águilas',
                'Ajedrez',
                'Ala Delta',
                'Álbumes de Música',
                'Alusivos',
                'Análisis de Escritura a Mano'
            ],
            ignoreAccent: true,
            waterMark: 'e.g: aero'

    }
  }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  #app {
    color: #008cff;
    height: 40px;
    position: absolute;
    top: 10%;
    width: 90%;
  }

  .autocomplete {
    width: 30%;
    margin: 0 auto;
  }
</style>


