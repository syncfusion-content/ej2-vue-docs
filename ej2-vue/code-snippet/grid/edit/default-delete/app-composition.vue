<template>
  <div id="app">
    <div style="padding: 20px;display:inline-flex">
      <label style="padding-right: 10px;font-weight: bold;">Enable/Disable show delete confirmation dialog</label>
      <ejs-switch id="switch1" :change="toggleShowDeleteConfirmDialog"></ejs-switch>
    </div>
    <ejs-grid ref="grid" :dataSource="data" allowPaging=true :editSettings="editSettings" :toolbar="toolbar" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" :validationRules="orderIDRules"
        isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :validationRules="customerIDRules" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"
        :validationRules="freightRules"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" :validationRules="shipCountryRules" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Page,Edit } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from './datasource.js';
const grid = ref(null);
const data = employeeData;
const editSettings ={
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal'
    };
const orderIDRules = { required: true, number: true };
const shipCountryRules = { required: true };
const customerIDRules ={ required: true };
const freightRules = { min: 1, max: 1000 };
const toolbar= ['Add', 'Delete', 'Update', 'Cancel'];
const toggleShowDeleteConfirmDialog= function (args) {
      grid.value.ej2Instances.editSettings.showDeleteConfirmDialog = args.checked;    
    }
provide('grid', [Page,Toolbar,Edit]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  </style>