<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings"  :actionComplete="actionComplete" :recordDoubleClick="recordDoubleClick">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="120" type="number" :validationRules='orderIDRules'>
        </e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="140" type="string" :validationRules='customerIDRules'>
        </e-column>
        <e-column field="Freight" headerText="Freight" editType="numericedit" textAlign="Right" width="120" format="C2" :validationRules='freightRules'>
        </e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" textAlign="Right" :validationRules='orderDateRules'  width="140" editType="datetimepickeredit" format="yMMM">
        </e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150" :validationRules='shipCountryRules' editType="dropdownedit" :edit="params">
        </e-column>
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
const orderIDRules= { required: true, number: true };
const customerIDRules= { required: true, minLength: 5 };
const freightRules= { required: true, min: 1 };
const shipCountryRules= { required: true };
const orderDateRules= { required: true };
const fieldName= "";
const editSettings= {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Normal",
      };
const params= {
        params: {
          popupHeight: "300px",
        }
      };
const grid = ref(null);
const actionComplete= function (e) { 
      if (e.requestType === "beginEdit") {
        e.form.elements[grid.value.ej2Instances.element.getAttribute("id") +this.fieldName].focus();
      }
    };
const recordDoubleClick= function (args)  {
      this.fieldName =grid.value.ej2Instances.getColumnByIndex(args.cellIndex).field;
    };
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