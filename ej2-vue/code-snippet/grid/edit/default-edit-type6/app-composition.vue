<template>
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='400px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' :validationRules='freightRules' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' :validationRules='shipCityRules' width=150></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="150" format='MM-dd-yyyy hh mm aa' editType='datetimepickeredit' :edit='dateTimePickerParams' :validationRules='orderDateRules'></e-column>      
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { data } from './datasource.js';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";

const dataGrid=data;
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar= ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules= { required: true, number: true };
const freightRules= { required: true, min: 1, max: 1000 };
const customerIDRules= { required: true };
const shipCityRules= { required: true };
const orderDateRules= { required: true };
const dateTimePickerParams = { params: {
            showClearButton : false,
            format:'MM-dd-yyyy hh:mm aa',
            start:'Year',
           }
        }
provide('grid', [Edit, Toolbar],);
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