<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' :dataSource='sportsData' :fields='fields' placeholder="Select a game"></ejs-combobox>
    </div>
  </div>
</template>
<script setup>
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";

const sportsData = [
  { Id: 'game1', Game: 'Badminton' },
  { Id: 'game2', Game: 'Football' },
  { Id: 'game3', Game: 'Tennis' }
]
const fields = { text: 'Game', value: 'Id' }

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
