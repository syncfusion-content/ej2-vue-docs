<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;"><br>
      <ejs-dropdowntree id='dropdowntree' :fields='fields' placeholder='Select an employee'
        :noRecordsTemplate='noRecordsTemplate'></ejs-dropdowntree>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { DropDownTreeComponent as EjsDropdowntree } from "@syncfusion/ej2-vue-dropdowns";

let data = [];
let noRecordsVue = createApp().component("noRecordsTemplate", {
  template: `<span class='norecord'> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});

const noRecordsTemplate = function (e) {
  return {
    template: noRecordsVue
  }
};
const fields = { dataSource: data, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";
</style>
