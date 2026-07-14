<template>
  <div id="app">
    <div class="filter-dropdown-container">
      <label for="filterType">Select Filter Type:</label>
      <ejs-dropdownlist
        ref="dropdownList"
        id="filterType"
        :dataSource="filterTypeData"
        :fields="fields"
        :value="filterOptions.type"
        @change="onFilterTypeChange"
      ></ejs-dropdownlist>
    </div>
    <ejs-grid :key="filterOptions.type" ref="grid" :dataSource="ordersTrackData" :allowFiltering="true" :filterSettings="filterOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100" isPrimaryKey="true"></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="120"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="100" textAlign="Right" format="yMd"></e-column>
        <e-column field="Product" headerText="Product" width="80"></e-column>
        <e-column field="Status" headerText="Status" width="80"></e-column>
        <e-column field="Amount" headerText="Amount" width="80" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref, reactive } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { ordersTrackData } from './datasource.js';
provide('grid', [Filter]);

const filterTypeData = [
  { text: 'CheckBox', value: 'CheckBox' },
  { text: 'Excel', value: 'Excel' }
];

const fields = { text: 'text', value: 'value' };
const filterOptions = reactive({ type: "CheckBox", mode: "Immediate" });
const grid = ref(null);
const dropdownList = ref(null);

const onFilterTypeChange = (event) => {
  filterOptions.type = event.value;
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";

  .filter-dropdown-container {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .filter-dropdown-container label {
    font-weight: 600;
    color: #333;
     white-space: nowrap;
  }

  .filter-dropdown-container .e-ddl {
    width: 150px;
  }

  .e-grid .e-excelfilter .e-contextmenu-wrapper {
    display: none;
  }
</style>