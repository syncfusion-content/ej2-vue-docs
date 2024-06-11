<template>
  <div id="app">
    <div id='container' style="margin:0 auto; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' ref="dropdownObj" :dataSource='sportsData' :fields='fields'
        placeholder='Select a game'></ejs-dropdownlist>
    </div>
    <div style='padding: 50px 0'>
      <button id='first' class="e-control e-btn" v-on:click="remove"> Remove 0th item</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const dropdownObj = ref(null);
let sportsData = [
  { Id: 'game1', Game: 'Badminton' },
  { Id: 'game2', Game: 'Football' },
  { Id: 'game3', Game: 'Tennis' }
]
const fields = { text: 'Game', value: 'Id' }

const remove = function (event) {
  if (dropdownObj.value.getItems().length > 1) {
    dropdownObj.value.getItems()[0].remove();
    dropdownObj.value.dataSource.splice(0, 1);
  } else {
    sportsData = [];
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
