<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" height='315px'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='auto'></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width='100px'></e-column>
              <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width='30%'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective} from "@syncfusion/ej2-vue-grids";
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

  provide: {
      grid: []
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>