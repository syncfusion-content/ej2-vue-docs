<template>
    <div id="app">
       <button id="add"  @click="clickAdd">Add Columns</button>
      <br /><br />
        <ejs-grid ref="grid" :dataSource='data' :enablePersistence='true' :allowPaging='true' height='230px' id="Grid">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
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
      data: data
    };
  },
  methods: {
     clickAdd: function () {
        let obj = { field: "Freight", headerText: 'Freight', width: 120 }
        this.$refs.grid.ej2Instances.columns.push(obj); //you can add the columns by using the Grid columns method
        this.$refs.grid.ej2Instances.refreshColumns();
    }
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>