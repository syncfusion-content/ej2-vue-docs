<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='182px' allowPaging=true>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
              <e-column field='OrderDate' :format='formatOptions' headerText='Order Date' format='yMd' textAlign='Right' width=120></e-column>
              <e-column field='OrderDate' :format='shipFormat' headerText='Ship Date' textAlign='Right'  width=150></e-column>
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
      formatOptions: { type: 'date', format: 'dd/MM/yyyy' },
      shipFormat: { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }
    };
  },
  methods: {
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>