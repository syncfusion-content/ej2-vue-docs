<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='dataGrid' :actionComplete='actionComplete' allowPaging='true' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :validationRules='orderIDRules' isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :validationRules='countryRules' :edit='editparams'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide,ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit,getObject } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const dataGrid= data;
const grid=ref(null);
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Dialog" };
const toolbar= ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules= { required: true, number: true };
const freightRules= { required: true, min: 1, max: 1000 };
const customerIDRules= { required: true };
const countryRules= { required: true };
const editparams= { params: { popupHeight: '200px' } };
const pageSettings= { pageCount: 5 };

const actionComplete=(args)=> {
  if (args.requestType == "beginEdit" || args.requestType == "add") { 
    let editModule = grid.value.ej2Instances.editModule;
    let valueError = getObject('valErrorPlacement', editModule).bind(editModule);
    grid.value.ej2Instances.editModule.formObj.customPlacement = (input, error) => { 
      valueError(input, error);
      var element = document.getElementById(input.name + '_Error');
      var tooltipWidth = element.offsetWidth;
      var  inputElement = null;
      if (document.querySelector('#' + grid.value.ej2Instances.element.id + input.name)) {
        inputElement = document.querySelector('#' +grid.value.ej2Instances.element.id + input.name);
      } else if (document.querySelector('#' + input.name)) {
          inputElement = document.querySelector('#' + input.name);
      }
      var inputPosition = inputElement.getBoundingClientRect();
      var leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px';
      var topPosition = (inputPosition.top).toString() + 'px';
      element.style.left = leftPosition; 
      element.style.top =  topPosition;
      element.style.position = 'fixed';
    } 
  }
}
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
.e-gridform .e-arrow-tip.e-tip-top {
  transform: rotate(95deg);
  left: 126px;
  top: 7px;
}
</style>