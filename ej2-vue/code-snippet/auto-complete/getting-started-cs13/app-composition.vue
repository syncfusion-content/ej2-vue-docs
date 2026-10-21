<template>
  <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :popupHeight='height' :popupWidth='width'
      :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';

const waterMark = 'Find a game';
const allowCustom = true;
const height = '250px';
const width = '250px';
const sportsData = ['Badminton', 'Basketball', 'Cricket',
  'Football', 'Golf', 'Gymnastics',
  'Hockey', 'Rugby', 'Snooker', 'Tennis'
];
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/auto-complete/index.css";

#app {
  color: #008cff;
  height: 40px;
  left: 35%;
  position: absolute;
  top: 35%;
  width: 30%;
}
</style>
