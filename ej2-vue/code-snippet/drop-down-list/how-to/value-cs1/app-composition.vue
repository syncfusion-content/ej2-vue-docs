<template>
  <div id="app">
    <div id='container' style="margin:0 auto; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' ref='dropdownObj' :value='dropDownValue' :dataSource='sportsData'
        :showClearButton='true' placeholder='Select a game'></ejs-dropdownlist>
    </div>
    <div style='padding: 50px'>
      <button id='button' class="e-control e-btn" v-on:click="onClick"> Set null to value property</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const dropdownObj = ref(null);
const dropDownValue = null;
const sportsData = ["American Football", "Badminton", "Basketball", "Cricket", "Football", "Golf", "Hockey", "Rugby", "Snooker", "Tennis"];

const onClick = function (event) {
  dropdownObj.value.ej2Instances.value = null;
  dropdownObj.value.dataBind();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
