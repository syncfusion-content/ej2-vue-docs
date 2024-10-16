<template>
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :editTemplate="'editTemplate'" :validationRules='customerIDRules'>
          <template v-slot:editTemplate>
            <ejs-autocomplete id="CustomerID" :value="orderData.CustomerID" :dataSource='autoCompleteData' :placeholder="'Select a customer'"></ejs-autocomplete>
          </template>
        </e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width='130' type="date" editType='datepickeredit' format='yMd' textAlign='Right' :validationRules='orderDateRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' :validationRules='shipCountryRules'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { AutoCompleteComponent as EjsAutocomplete } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
const dataGrid= data;
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar= ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules= { required: true, number: true };
const freightRules= { required: true, min: 1, max: 1000 };
const customerIDRules={ required: true };
const shipCountryRules= { required: true };
const orderDateRules= { required: true };
const autoCompleteData= [
        { value: 'VINET', text: 'VINET' },
        { value: 'TOMSP', text: 'TOMSP' },
        { value: 'HANAR', text: 'HANAR' },
        { value: 'VICTE', text: 'VICTE' },
        { value: 'SUPRD', text: 'SUPRD' },
      ];
let orderData = ref({});

const actionBegin = (args) => {
  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    orderData.value = Object.assign({}, args.rowData);
  }
  if (args.requestType === 'save') {
    orderData.value['CustomerID']= args.data['CustomerID'] ;
  }
};
  provide('grid',  [Edit, Toolbar]);
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