<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' height=323 :load='load'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
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
      pageSettings: { pageSize: 5 }
    };
  },
  methods: {
    load: function() {
      let rowHeight = this.$refs.grid.ej2Instances.getRowHeight();  //height of the each row
      let gridHeight = this.$refs.grid.height;  //grid height
      let pageSize = this.$refs.grid.pageSettings.pageSize;   //initial page size
      let pageResize = (gridHeight - (pageSize * rowHeight)) / rowHeight; //new page size is obtained here
      this.$refs.grid.pageSettings = {pageSize: pageSize + Math.round(pageResize)};
    }
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>