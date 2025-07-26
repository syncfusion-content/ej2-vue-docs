<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' allowPaging='true' :load='load'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format= 'C2' :validationRules='freightRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :validationRules='shipCountryRules' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit,Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
const data= employeeData;
const orderIDRules= {required: true, number: true};
const customerIDRules= { required: true, minLength: 5 };
const freightRules= { required: true, min: 1 };
const shipCountryRules= { required: true };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const grid = ref(null);

const load= function () {
  grid.value.ej2Instances.element.addEventListener('mouseup', function(e) {
    var instance = this.ej2_instances[0];
    if (e.target.classList.contains("e-rowcell")) {
      if (instance.isEdit) {
        instance.endEdit();
      }
      let index = parseInt(e.target.getAttribute("Index"));
      instance.selectRow(index);
      instance.startEdit();
    }
  });
}
provide('grid', [Page,Edit, Toolbar]);
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