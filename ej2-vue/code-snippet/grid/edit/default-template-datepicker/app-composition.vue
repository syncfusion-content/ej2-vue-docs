<template>
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Time' type="date" width='130' :editTemplate="'editTemplate'" editType='datepickeredit' format='hh :mm a ' textAlign='Right' :validationRules='orderDateRules'>
          <template v-slot:editTemplate>
            <ejs-timepicker id="OrderDate" :value='orderData.OrderDate'></ejs-timepicker >
          </template>
        </e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150'   :validationRules='shipCountryRules'>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
  import { TimePickerComponent as EjsTimepicker } from "@syncfusion/ej2-vue-calendars";
import { data } from './datasource.js';
const dataGrid= data;
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar= ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules= { required: true, number: true };
const freightRules= { required: true, min: 1, max: 1000 };
const customerIDRules={ required: true };
const orderDateRules= { required: true };
const shipCountryRules= { required: true };

let orderData=ref(null);

const actionBegin=function(args) {
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          orderData.value = Object.assign({}, args.rowData);
      }
      if (args.requestType === 'save') {
        orderData.value['OrderDate']=args.data['OrderDate'] ;
      }

};
  provide('grid',  [Page, Edit, Toolbar]);
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