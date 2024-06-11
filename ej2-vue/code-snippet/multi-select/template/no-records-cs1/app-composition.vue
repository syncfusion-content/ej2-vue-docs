<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='data' :noRecordsTemplate='noRecordsTemplate'
        placeholder="Select an item"></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";

let footerVue = createApp().component("footerTemplate", {
  template: `<span class='norecord'> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});

const data = [];
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
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
