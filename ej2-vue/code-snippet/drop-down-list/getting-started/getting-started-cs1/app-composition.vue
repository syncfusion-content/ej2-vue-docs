<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' :dataSource='sportsData' placeholder='Select a game'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-list/index.css";
</style>
