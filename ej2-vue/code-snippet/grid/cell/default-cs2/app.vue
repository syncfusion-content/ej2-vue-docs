<template>
    <div id="app">
        <ejs-grid :dataSource="data" height='315'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' :customAttributes= "{class: 'custom-css'}" width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' :customAttributes= "{class: 'custom-css'}" width=90></e-column>
            <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=120 > </e-column>          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
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
      data: data
    };
  }
}
</script>
<style>
  .custom-css {
  background: #d7f0f4;
  font-style: italic;
  color:navy
  }

 @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>