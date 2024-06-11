<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :pageSettings='pageSettings' :selectionSettings='selectionOptions' height='272px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=120></e-column>
                <e-column field='Freight' headerText='Freight' type='number' format='C2' textAlign='Right' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' type='string' width=180></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
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
      pageSettings: { pageSize: 8 },
      selectionOptions: { type: 'Multiple' }
    };
  },
  provide: {
      grid: [Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
.e-grid {
  font-family: cursive;
}
.e-grid .e-row:hover .e-rowcell {
  background-color: rgb(204, 229, 255) !important;
}
.e-grid .e-rowcell.e-selectionbackground {
  background-color: rgb(230, 230, 250);
}
.e-grid .e-row.e-altrow {
  background-color: rgb(150, 212, 212);
}
.e-grid .e-row {
  background-color: rgb(180, 180, 180);
}
</style>