<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 17px 0 0">Autowrap for header column :</label>
      <ejs-dropdownlist index="0" width="150" :dataSource="dropdownData" :change="valueChange">
      </ejs-dropdownlist>
    </div>
    <div style="padding-top: 20px">
      <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :allowTextWrap="true" :textWrapSettings="wrapSettings"
        height="400">
        <e-columns>
          <e-column field="Inventor" headerText="Inventor Name" width="180" textAlign="Right">
          </e-column>
          <e-column field="NumberofPatentFamilies" headerText="Number of Patent Families" width="180" textAlign="Right">
          </e-column>
          <e-column field="Country" headerText="Country" width="140"></e-column>
          <e-column field="Active" width="120"></e-column>
          <e-column field="Mainfieldsofinvention" headerText="Main Fields Of Invention" width="200">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
const grid = ref(null);
const wrapSettings = { wrapMode: "Header" };
const dropdownData = [
  { text: "Header", value: "Header" },
  { text: "Both", value: "Both" },
];
const valueChange = function (args) {
  grid.value.ej2Instances.textWrapSettings.wrapMode =
    args.value;
}
provide('grid', [Page])
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>