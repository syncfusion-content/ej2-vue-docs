<template>
    <div id="app">
        <ejs-grid id="grid" :dataSource="data" :editSettings='editSettings' :rowDataBound='rowDataBound'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120> </e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { MouseEventArgs } from '@syncfusion/ej2-base';
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
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
    };
  },
  methods: {
    rowDataBound(args){
      let gridElement = document.getElementById('grid').ej2_instances[0];
      args.row.addEventListener('mouseover', function(e) {
        console.log(gridElement.getRowInfo(e.target))
    })
    }
  },
  provide: {
    grid: [Edit]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>