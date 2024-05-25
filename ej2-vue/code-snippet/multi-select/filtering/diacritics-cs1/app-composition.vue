<template>
  <div id="app">
    <div id='container' style="margin:15px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='diacriticsData' :ignoreAccent="ignoreAccent"
        :allowFiltering='allowFiltering' placeholder="e.g: aero"></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";

const diacriticsData = [
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
];
const ignoreAccent = true;
const allowFiltering = true;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
