<template>
  <div id="app">
    <div id='container' style="margin:15px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='sportsData' placeholder="Select a game" mode="CheckBox"
        :fields='fields' :maximumSelectionLength='maximumSelectionLength'></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { MultiSelectComponent as EjsMultiselect, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";

const sportsData = [
  { Id: 'game1', Game: 'Badminton' },
  { Id: 'game2', Game: 'Football' },
  { Id: 'game3', Game: 'Tennis' },
  { Id: 'game4', Game: 'Golf' },
  { Id: 'game5', Game: 'Cricket' },
  { Id: 'game6', Game: 'Handball' },
  { Id: 'game7', Game: 'Karate' },
  { Id: 'game8', Game: 'Fencing' },
  { Id: 'game9', Game: 'Boxing' }
];
const fields = { text: 'Game', value: 'Id' };
let maximumSelectionLength = 3;

provide('multiselect', [CheckBoxSelection]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
