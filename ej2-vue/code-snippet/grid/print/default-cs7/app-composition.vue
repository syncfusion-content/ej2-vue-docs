<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="gridData" :allowPaging="true" :toolbar="toolbarOptions" :beforePrint="beforePrint" height="272px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :visible="false" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource.js';
const toolbarOptions = ['Print'];
const gridData = data;
const beforePrint = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    .e-grid .e-headercell {
      background: #24a0ed !important;
    }
    .e-grid .e-row .e-rowcell {
      background: #cbecff !important;
    }
    .e-grid .e-altrow .e-rowcell {
      background: #e7d7f7 !important;
    }
  `;
  document.head.appendChild(styleElement);
};

provide('grid', [Page, Toolbar]);
</script>

<style>
.e-grid .e-headercell {
  background: #24a0ed !important;
}
.e-grid .e-row .e-rowcell {
  background: #cbecff !important;
}
.e-grid .e-altrow .e-rowcell {
  background: #e7d7f7 !important;
}
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
