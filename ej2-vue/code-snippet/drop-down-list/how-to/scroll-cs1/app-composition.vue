<template>
  <div id="app">
    <div style='padding: 50px'>
      <h4> You can close the opened popup by scroll the page.</h4>
    </div>
    <div id='container' style="margin:0 auto; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' popupHeight="220px" :dataSource='sportsData'
        placeholder='Select a game'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

document.onscroll = () => {
  let dropObj = document.getElementById("dropdownlist"); //to get dropdown list object
  dropObj.ej2_instances[0].hidePopup(); // hide the popup using hidePopup method
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

body {
  height: 500px;
}
</style>
