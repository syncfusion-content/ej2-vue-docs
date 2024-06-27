<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' :validationRules='orderIDRules' textAlign='Right' isPrimaryKey='true' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 :validationRules='freightRules' format= 'C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :validationRules='shipCountryRules' editType= 'dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
const data= employeeData;
const editSettings= { allowEditing: true, mode: "Normal" };
const toolbar= ["Edit", "Update", "Cancel"];
const orderIDRules= { required: true };
const customerIDRules= { required: true };
const freightRules= { required: true, min: 1, max: 1000 };
const shipCountryRules= { required: true };
const actionBegin= function (args) {
  if (args.requestType === "beginEdit" && args.rowData.ShipCountry === "France") {
    args.cancel = true;
  }
}
provide('grid', [Edit, Toolbar]);
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