

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="250px" :dataSource='sportsData' placeholder='Select a game'></ejs-dropdownlist>
    </div>
  </div>
</template>

<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>


