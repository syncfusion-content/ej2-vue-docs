<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin="actionBegin">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='140' :visible='false' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules' ></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' :validationRules='shipCountryRules' editType='dropdownedit' ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const orderIDRules = { required: true, number: true };
const shipCountryRules = { required: true };
const freightRules = { required: true };
const customerIDRules = { required: true };
const actionBegin = (args) => {
    if (args.requestType === 'beginEdit') {
        for (const cols of grid.value.ej2Instances.columns) {
            if (cols.field === 'CustomerID') {
                cols.visible = true;
            } else if (cols.field === 'ShipCountry') {
                cols.visible = false;
            }
        }
    }
    else if (args.requestType === 'add') {
        for (const cols of grid.value.ej2Instances.columns) {
            if (cols.field === 'CustomerID') {
                cols.visible = true;
            }
        }
    }
    else if (args.requestType === 'save') {
        for (const cols of grid.value.ej2Instances.columns) {
            if (cols.field === 'CustomerID') {
                cols.visible = false;
            } else if (cols.field === 'ShipCountry') {
                cols.visible = true;
            }
        }
    }
}
provide('grid', [Edit, Toolbar]);
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