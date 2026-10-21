<template>
  <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';

const waterMark = 'e.g. Basketball';
const sportsData = ['American Football', 'Badminton', 'Basketball', 'Cricket',
  'Football', 'Golf', 'Gymnastics',
  'Hockey', 'Rugby', 'Snooker', 'Tennis'
]
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
