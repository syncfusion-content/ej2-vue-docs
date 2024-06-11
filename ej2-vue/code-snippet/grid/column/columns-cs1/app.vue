<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' format ='C2' width=80></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' textAlign='Right' width=80></e-column>
            </e-columns>
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
  },
  methods: {
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>