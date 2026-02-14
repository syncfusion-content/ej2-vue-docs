<template>
    <div id="app">
        <ejs-grid ref="grid" id="grid" :dataSource='data' :allowPaging='true' :enableHover='false' :created='created' :load='load' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 :validationRules='freightIDRules' format= 'C2'></e-column>
                <e-column field='OrderDate' headerText='Order Date'  type="date" textAlign= 'Right' :validationRules='orderDateRules' editType= 'datepickeredit' width=120 format= 'yMd'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150 :validationRules='shipCountryRules'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
var grid = ref(null);
const orderIDRules = { required: true };
const orderDateRules = { required: true };
const shipCountryRules = { required: true };
const customerIDRules = { required: true, minLength: 5 };
const freightIDRules  = { required: true, min: 1, max: 1000 };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const created = function () {
    let gridInstance = grid.value.ej2Instances;
    gridInstance.getContentTable().addEventListener('click', (args) => {
        if (args.target.classList.contains('e-rowcell')) {
            gridInstance.editModule.editCell(parseInt(args.target.getAttribute('index')),
            gridInstance.getColumnByIndex(parseInt(args.target.getAttribute('aria-colindex'))-1).field);
        }
    });
}
const editACell = function (args) {
    let gridInstance = grid.value.ej2Instances;
    gridInstance.editModule.editCell(
        parseInt(args.getAttribute('index')),
        gridInstance.getColumnByIndex(parseInt(args.getAttribute('aria-colindex'))-1).field);
}
const load = function () {
    let gridInstance = grid.value.ej2Instances
    gridInstance.element.addEventListener('keydown', (e) => {
        var closesttd = e.target.closest('td');
        if (e.keyCode === 39 && !isNullOrUndefined(closesttd.nextSibling)) {
            editACell(closesttd.nextSibling);
        }
        if (e.keyCode === 37 && !isNullOrUndefined(closesttd.previousSibling) &&
            !gridInstance.getColumnByIndex(
                parseInt(closesttd.previousSibling.getAttribute('aria-colindex'))-1).isPrimaryKey) {
            editACell(closesttd.previousSibling);
        }
        if (e.keyCode === 40 && !isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
            editACell(
                closesttd.closest('tr').nextSibling.querySelectorAll('td')[
                parseInt(closesttd.getAttribute('aria-colindex'))-1]);
        }
        if (e.keyCode === 38 && !isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
            editACell(
                closesttd.closest('tr').previousSibling.querySelectorAll('td')[
                parseInt(closesttd.getAttribute('aria-colindex'))-1]);
        }
    });
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
</style>