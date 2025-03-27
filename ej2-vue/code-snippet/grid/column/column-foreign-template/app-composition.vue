<template>
  <div id="app">
    <ejs-grid ref="grid" id="grid" :dataSource="data" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150" foreignKeyField="CustomerID" foreignKeyValue="ContactName" :dataSource="customerData" :template="'radioTemplate'" >
        </e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
        <e-column field="OrderDate" headerText="Order Date" textAlign="Right" type="date" format="yMd" width="120"></e-column>    
      </e-columns>
      <template v-slot:radioTemplate="{ data }">
        <a href="javascript:void(0)" @click="navToAccount(data.OrderID,$event)">{{ data.foreignKeyData.ContactName }}</a>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { orderDetails,  customerData } from './datasource';

const data=orderDetails;

const navToAccount = (id) => {
  window.history.pushState("", "changed", `../Account/AccountDetail.cshtml?custid=0&accountId=${id}`);
};
provide('grid',  [ForeignKey]);
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