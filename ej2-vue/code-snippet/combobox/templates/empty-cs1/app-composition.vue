<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' :dataSource='sportsData' :noRecordsTemplate='noRecordsTemplate'
        placeholder="Select an item"></ejs-combobox>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";

let footerVue = createApp().component("noRecordsTemplate", {
  template: `<span class='norecord'> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});

const sportsData = [];
const noRecordsTemplate = function (e) {
  return {
    template: footerVue
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
