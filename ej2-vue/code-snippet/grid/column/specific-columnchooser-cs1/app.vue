<template>
  <div id="app">
    <ejs-grid :dataSource="data" :showColumnChooser="true" :toolbar="toolbarOptions" :beforeOpenColumnChooser="beforeOpenColumnChooser" height="235px" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150" textAlign="Left"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150" :showInColumnChooser="false"></e-column>
        <e-column field="ShipRegion" headerText="Ship Region" width="150" :visible="false"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
      toolbarOptions: ["ColumnChooser"]
    };
  },
  methods: {
    // Show only specific columns in the column chooser.
    beforeOpenColumnChooser(args) {
      args.selectedColumns = ["CustomerID", "Freight", "ShipCountry"];
    }
  },
  provide: {
    grid: [ColumnChooser, Toolbar]
  }
};
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