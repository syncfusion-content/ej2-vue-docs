<template>
  <div id="app">
    <ejs-button @click="AddColumns"> Add Columns </ejs-button>
    <ejs-button @click="DeleteColumns"> Delete Columns </ejs-button>
    <ejs-grid ref='grid' :dataSource='data' :height='280'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120
          type='date'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data
    };
  },
  methods: {
    AddColumns: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      var newColumns = [
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 120 },
      ];
      newColumns.forEach((col) => {
        grid.columns.push(col);
      });
      grid.refreshColumns();
    },
    DeleteColumns: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.columns.pop();
      grid.refreshColumns();

    }
  }
}
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