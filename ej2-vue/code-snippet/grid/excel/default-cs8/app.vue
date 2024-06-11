<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbarOptions' height='220px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick'>
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

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport, Page, Group } from "@syncfusion/ej2-vue-grids";
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
      toolbarOptions: ['ExcelExport'],
      groupOptions: { columns: ['CustomerID', 'ShipCity'] }
    };
  },
  methods: {
      toolbarClick: function(args) {
         if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            this.$refs.grid.excelExport();
        }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport, Page, Group]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>