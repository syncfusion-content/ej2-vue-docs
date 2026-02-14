<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data'  :allowFiltering=true height='315px' >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field="Type" headerText="Type" :template="'dropdownTemplate'" :filterTemplate="'dropDownFilterTemplate'" width=130></e-column>
      </e-columns>
      <template v-slot:dropdownTemplate="{data}">
        {{ data.Type === 1 ? 'Base' : data.Type === 2 ? 'Replace' : data.Type === 3 ? 'Delta' : '' }}
      </template>
      <template v-slot:dropDownFilterTemplate>
        <div>
          <ejs-dropdownlist cssClass='e-fltrtemp-focus' :dataSource="filterDropData"
            value="filterDropData[0].Type" :fields="fields" :change="onTypeFilterChange"></ejs-dropdownlist>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,  Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data, FileType } from './datasource.js';
provide('grid', [Filter]);
const grid = ref(null);
const fields = { text: "Type", value: "Type" };
const filterDropData= [
  { Type: 'All' },
  { Type: 'Base' },
  { Type: 'Replace' },
  { Type: 'Delta' },
]

const onTypeFilterChange = (args) => {
  if (args.value == 'All') {
    grid.value.ej2Instances.clearFiltering();
  } else {
    grid.value.ej2Instances.filterByColumn("Type", "contains", FileType[args.value]);
  }
};
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