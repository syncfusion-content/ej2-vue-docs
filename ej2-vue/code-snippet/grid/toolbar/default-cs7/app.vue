<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbar' :created='created' height='175px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' width='90'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width='100'></e-column>
        <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' format='C2' width='80'></e-column>
        <e-column field='OrderDate' headerText='OrderDate' type='date' textAlign='Right' format='yMd' width='100'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar } from "@syncfusion/ej2-vue-grids";
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
      toolbar: ['Print', 'Search'],
    };
  },
  methods: {
    created: function () {
      let toolbar = this.$refs.grid.ej2Instances.element.querySelector(".e-toolbar");
      this.$refs.grid.ej2Instances.element.appendChild(toolbar);
    }
  },
  provide: {
    grid: [Toolbar]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>