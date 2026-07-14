<template>
    <div id="app">
      <ejs-grid  ref="grid" id="grid" :dataSource='billingData' :allowPaging='true' :allowSorting='true' :allowFiltering='true; :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :actionBegin="actionBegin" :actionComplete="actionComplete">
        <e-columns>
          <e-column field="BillID" headerText="Bill ID" width="120" :isPrimaryKey="true" :validationRules="{ required: true }"></e-column>
          <e-column field="BillDate" headerText="Bill Date" width="140" format="yMd" editType="datepickeredit"></e-column>
          <e-column field="Customer" headerText="Customer Name" width="150" :validationRules="{ required: true }"></e-column>
          <e-column field="Product" headerText="Product Name" width="150" editType="dropdownedit"></e-column>
          <e-column field="Category" headerText="Category" width="130" editType="dropdownedit"></e-column>
          <e-column field="Quantity" headerText="Quantity" width="100" textAlign="Right" format="N0"></e-column>
          <e-column field="Price" headerText="Price" width="100" textAlign="Right" editType="numericedit" format="C2"></e-column>
          <e-column field="Total" headerText="Total" width="120" textAlign="Right" format="C2"></e-column>
          <e-column field="PaymentStatus" headerText="Payment Status" width="130" editType="dropdownedit"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { billingData } from './datasource.js';
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
const toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
const filterSettings = { type: 'CheckBox' };
const actionBegin = function (args) {
  if (args.requestType === 'beginEdit' && args.columnName === 'Total') {
    args.cancel = true;
  }
}
const actionComplete = function (args) {
  let gridInstance = grid.value.ej2Instances;
  if (args.action === 'edit' && args.requestType === 'save' && (args.columnName === 'Quantity' || args.columnName === 'Price')) {
    var total = args.data.Quantity * args.data.Price;
    gridInstance.updateCell(args.index, "Total", total);
  }
}
provide('grid', [Page, Edit, Toolbar, Sort, Filter]);
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