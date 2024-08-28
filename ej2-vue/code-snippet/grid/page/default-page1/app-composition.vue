<template>
  <div id="app">
    <p id="message1">{{message1}}</p>
    <p id="message">{{message}}</p>    
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :actionBegin="onActionBegin" :actionComplete="onActionComplete"
      :pageSettings="initialPage">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" textAlign="Right" format="yMd" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from 'vue';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource.js';
const grid = ref(null);
const initialPage = { pageSize: 5 };
const message = ref('');
const message1 = ref('');
const onActionBegin = (args) => {
  if (args.requestType === 'paging') {
    message.value = args.currentPage > args.previousPage
      ? `You are going to switch to page ${parseInt(args.currentPage, 10) + 1}`
      : `You are going to switch to page ${args.previousPage}`;
  }
};
const onActionComplete = (args) => {
  if (args.requestType === 'paging') {
    message1.value = `Now you are in page ${args.currentPage}`;
  }
};
provide('grid', [Page]);
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

#message, #message1 {
  color: red;
  text-align: center;
}
</style>
