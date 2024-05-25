<template>
  <div id="app">
    <div id='container' style="margin:0 auto; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' ref='dropdown' :index='index' :dataSource='sportsData' :fields='fields'
        placeholder='Select a game'></ejs-dropdownlist>
    </div>
    <div style='padding: 50px 0'>
      <button id='first' class="e-control e-btn" v-on:click="onFirst"> add item (Hockey) in first</button>
    </div>
    <div style='padding-left: 50px 0'>
      <button id='between' class="e-control e-btn" v-on:click="onMiddle"> add item (Golf) in between</button>
    </div>
    <div style='padding: 50px 0'>
      <button id='last' class="e-control e-btn" v-on:click="onLast"> add item (Cricket) in last</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const dropdown = ref(null);
const sportsData = [
  { Id: 'game1', Game: 'Badminton' },
  { Id: 'game2', Game: 'Football' },
  { Id: 'game3', Game: 'Tennis' }
];
const fields = { text: 'Game', value: 'Id' };
let index = 2;

const onFirst = function (event) {
  dropdown.value.addItem({ Id: 'game0', Game: 'Hockey' }, 0);
};
const onMiddle = function (event) {
  dropdown.value.addItem({ Id: 'game4', Game: 'Golf' }, 2);
};
const onLast = function (event) {
  dropdown.value.addItem({ Id: 'game5', Game: 'Cricket' });
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
