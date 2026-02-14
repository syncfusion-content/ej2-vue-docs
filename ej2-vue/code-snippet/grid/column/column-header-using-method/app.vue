<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :dataBound="dataBound" height="320">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150">
        </e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" 
        textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150">
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    dataBound: function () {
      this.$refs.grid.ej2Instances.getColumnHeaderByIndex(0).style.color = 'green';
      this.$refs.grid.ej2Instances.getColumnHeaderByField('CustomerID').style.background = 'rgb(217, 244, 235)';
      this.$refs.grid.ej2Instances.getColumnHeaderByField('OrderID').style.background = 'rgb(217, 244, 235)';
      this.$refs.grid.ej2Instances.getColumnHeaderByField('ShipCountry').style.background = 'rgb(217, 244, 235)';
      this.$refs.grid.ej2Instances.getColumnHeaderByField('CustomerID').style.color = 'green';
      this.$refs.grid.ej2Instances.getColumnHeaderByUid('grid-column2').style.background = 'rgb(217, 244, 235)';
      const columnIndex = this.$refs.grid.ej2Instances.getColumnIndexByField('ShipCountry');
      this.$refs.grid.ej2Instances.getColumnHeaderByIndex(columnIndex).style.color = 'green';
      const index =  this.$refs.grid.ej2Instances.getColumnIndexByUid('grid-column2');
      this.$refs.grid.ej2Instances.getColumnHeaderByIndex(index).style.color = 'green';
    }
  }
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