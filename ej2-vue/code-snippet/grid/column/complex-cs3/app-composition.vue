<template>
  <div id="app">
    <ejs-grid :dataSource="data" :query="query">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
        <e-column field="Employee.City" headerText="City" width="130"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataV4Adaptor, Query } from "@syncfusion/ej2-data";

const query = new Query().expand("Employee");
const SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";
const data = new DataManager({
  url: SERVICE_URI,
  adaptor: new ODataV4Adaptor(),
  crossDomain: true,
});
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