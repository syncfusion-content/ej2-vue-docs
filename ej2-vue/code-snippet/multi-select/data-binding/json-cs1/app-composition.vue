<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='sportsData' :fields='fields'
        placeholder="Select a game"></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";

const sportsData = [
  { Id: 'game1', Game: 'Badminton' },
  { Id: 'game2', Game: 'Football' },
  { Id: 'game3', Game: 'Tennis' }
];
const fields = { text: 'Game', value: 'Id' };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/multi-select/index.css";
</style>
