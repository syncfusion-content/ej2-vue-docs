

<template>
  <div id="app">
    <div id='container' style="margin:15px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' :dataSource='diacriticsData' :ignoreAccent="ignoreAccent" :allowFiltering='allowFiltering' placeholder="e.g: aero"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MultiSelectPlugin);

export default {
  data (){
    return {
      diacriticsData : [
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
        ignoreAccent : true,
        allowFiltering : true
    }
  }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>


