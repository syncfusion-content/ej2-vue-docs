<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' :dataSource='diacriticsData' :ignoreAccent="ignoreAccent"
        :allowFiltering='allowFiltering' placeholder="e.g: aero"></ejs-combobox>
    </div>
  </div>
</template>
<script setup>
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";

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
</style>
