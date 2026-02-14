<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='dataGrid' :allowPaging='true' :editSettings='editSettings' :toolbar='toolbar' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width="100"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width="120" :validationRules='customerIDRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width="100" :validationRules='shipCountryRules'></e-column>
        <e-column field='CustomerNumber' headerText='Customer Number' width="140" :editTemplate="'editTemplate'">
            <template v-slot:editTemplate>
              <ejs-maskedtextbox id="CustomerNumber" name="CustomerNumber" mask='000-000-0000' 
              :value="orderData.CustomerNumber"></ejs-maskedtextbox>
            </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";
import { data } from './datasource.js';
const dataGrid= data;
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar= ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules= { required: true, number: true };
const customerIDRules={ required: true };
const shipCountryRules= { required: true };
let orderData=ref(null);

const actionBegin=function(args) {
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
         orderData.value = Object.assign({}, args.rowData);
      }
      if (args.requestType === 'save') {
        orderData.value['CustomerNumber']=args.data['CustomerNumber'] ;
      }
};
  provide('grid',  [Page, Edit, Toolbar]);
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