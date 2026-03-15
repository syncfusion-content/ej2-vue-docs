<template>
  <div id="app">
    <ejs-grid :dataSource='dataGrid' allowPaging='true' :actionComplete="onActionComplete" :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='140' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules' :edit='edit'></e-column>
        <e-column field='OrderDate' headerText='Order Date' type="date" width='120' :validationRules='orderDateRules' editType='datetimepickeredit' format='y/m/d' textAlign='Right'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' :validationRules='shipCountryRules' editType='dropdownedit' :edit='editparams'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

let formElement;
const editSettings = {
  allowEditing: true,
  allowAdding: true,
  allowDeleting: true,
  mode: 'Normal',
  newRowPosition: 'Top'
};
const dataGrid=data;
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const orderIDRules = { required: true, number: true };
const shipCountryRules = { required: true };
const orderDateRules = { required: true };
const customerIDRules = { required: true };
const freightRules = {
  required: true,
  maxLength: [(args) => args['value'] <= 1000, 'Please enter a value less than 1000'],
  minLength: [(args) => args['value'] >= 1, 'Please enter a value greater than 1']
};
const editparams = { params: { popupHeight: '300px' } };
const pageSettings = { pageCount: 5 };
const onActionComplete = function(args) {
  if (args.requestType === "beginEdit" || args.requestType === "add") {
    formElement = args.form;
  }
};
const onChange = function() {
  if (formElement) {
    formElement['ej2_instances'][0].validate(); 
  }
};
const edit = { params: { change: onChange } };

provide('grid', [Page, Edit, Toolbar]);
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
