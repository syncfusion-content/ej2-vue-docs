<template>
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Date' type="date" width='130' editType='datepickeredit' format='yMd' textAlign='Right' :validationRules='orderDateRules'>
        </e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150' :editTemplate="'editTemplate'" :validationRules='shipCityRules'>
          <template  v-slot:editTemplate>
            <ejs-multiselect id='ShipCity' :dataSource='multiSelectDatasource' v-model="orderData.ShipCity"  :fields='fields'></ejs-multiselect>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

const dataGrid = data;
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules = { required: true, number: true };
const freightRules = { required: true, min: 1, max: 1000 };
const customerIDRules = { required: true };
const shipCityRules = { required: true };
const orderDateRules = { required: true };
const multiSelectDatasource = [
  { value: 'Reims', text: 'Reims' },
  { value: 'Münster', text: 'Münster' },
  { value: 'Rio de Janeiro', text: 'Rio de Janeiro' },
  { value: 'Lyon', text: 'Lyon' },
  { value: 'Charleroi', text: 'Charleroi' }
];
const fields = { value: 'value', text: 'text' };
let orderData = ref({});

const actionBegin = function(args) {
  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    orderData.value = Object.assign({}, args.rowData);
    orderData.value['ShipCity'] = orderData.value['ShipCity'] ? orderData.value['ShipCity'].split(',') : [];
  }
  if (args.requestType === 'save') {
    args.data['ShipCity'] = orderData.value['ShipCity'].join(',');
  }
};

provide('grid', [Page, Edit, Toolbar]);
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