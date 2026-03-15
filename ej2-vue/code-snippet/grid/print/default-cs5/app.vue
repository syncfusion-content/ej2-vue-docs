<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :pageSettings='pageSettings' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :printComplete='printComplete' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Toolbar,Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      data: data,
      pageSettings: { pageSizes: true, pageSize: 10 },
      toolbarOptions: ["Print"],
    };
  },
  methods: {
    toolbarClick: function () {
      const columns =this.$refs.grid.ej2Instances.columns;
       for (const column of (columns )) {
        if (column.field == "CustomerID") {
         column.visible = true;
        } else if (column.field == "ShipCity") {
          column.visible = false;
        }
      }
    },
    printComplete: function () {
      const columns =this.$refs.grid.ej2Instances.columns;
      for (const column of (columns)) {
        if (column.field == "CustomerID") {
         column.visible = false;
        } else if (column.field == "ShipCity") {
          column.visible = true;
        }
      }
    },
  },
  provide: {
    grid: [Toolbar, Page],
  },
};
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