<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :allowPaging='true' :allowFiltering='true' :allowSelection='true'
      :selectionSettings='selectionOptions' :editSettings='editSettings' :toolbar='toolbar' :pageSettings='pageOptions'
      :filterSettings='filterOptions' :rowDataBound='rowDataBound'>
      <e-columns>
        <e-column type='checkbox' width=120></e-column>
        <e-column field='List' headerText='List' width=120></e-column>
        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=150></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150>
        </e-column>
        <e-column field='EmployeeID' headerText='Employee ID' width=150>
        </e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Edit, Toolbar, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
for (let i = 0; i < data.length; i++) {
  data[i]['List'] = i + 1;
}
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
const selectionOptions = { type: 'Multiple', persistSelection: true };
const pageOptions = { pageSize: 5 };
const filterOptions = { type: 'CheckBox' };
const rowDataBound = function (args) {
  args.isSelectable = args.data.List % 5 === 0;
}
provide('grid', [Page, Edit, Toolbar, Filter]);
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