<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' height='315' width='auto' :detailDataBound='detailDataBound' :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field='FirstName' headerText='First Name' width='140'></e-column>
        <e-column field='LastName' headerText='Last Name' width='140'></e-column>
        <e-column field='Title' headerText='Title' width='150'></e-column>
        <e-column field='Country' headerText='Country' width='150'></e-column>
      </e-columns>
        <template v-slot:detailTemplate>
          <div class = 'custom-grid' ></div>
        </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,DetailRow,Grid } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from "./datasource.js";
      const data = employeeData;
    const detailDataBound = function (args) {
              let detail = new Grid({
            dataSource: data.filter((item) => item['EmployeeID'] === args.data['EmployeeID']),
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 110 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
        detail.appendTo(args.detailElement.querySelector('.custom-grid'));
    }
  provide('grid', [DetailRow]);
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