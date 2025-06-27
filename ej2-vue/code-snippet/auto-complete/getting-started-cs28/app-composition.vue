<template>
  <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :placeholder="waterMark" :debounceDelay='debounceDelay'></ejs-autocomplete>
  </div>
</template>
<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';

const waterMark = 'Find a game';
const allowCustom = true;
const debounceDelay= 300;
const sportsData = ['Badminton', 'Basketball', 'Cricket',
  'Football', 'Golf', 'Gymnastics',
  'Hockey', 'Rugby', 'Snooker', 'Tennis'
];
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  left: 35%;
  position: absolute;
  top: 35%;
  width: 30%;
}
</style>
