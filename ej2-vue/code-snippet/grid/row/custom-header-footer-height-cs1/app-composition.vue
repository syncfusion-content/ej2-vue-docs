<template>
  <div id="app">
    <ejs-grid :dataSource="data" :height="270" :headerRowHeight="50" :footerRowHeight="50" :rowHeight="100" :aggregates="aggregates">
      <e-columns>
        <e-column headerText="Image" textAlign="Center" width="120" :template="employeeImageTemplate"></e-column>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="Freight" headerText="Freight" width="150" format="C2"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { createApp, provide } from "vue";
import { Aggregate, GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

const app = createApp();
const aggregates = [{
  columns: [{
    field: "Freight",
    type: "Sum",
    footerTemplate: "Total Freight: ${Sum}"
  }]
}];
const employeeImageTemplate = () => ({
  template: app.component("employeeImageTemplate", {
    template: "<div class='image'><img :src=\"image\" alt='Employee Image' width='40' height='40' /></div>",
    data() {
      return { data: {} };
    },
    computed: {
      image() {
        return `https://ej2.syncfusion.com/demos/src/grid/images/${this.data.EmployeeID}.png`;
      }
    }
  })
});

provide("grid", [Aggregate]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>