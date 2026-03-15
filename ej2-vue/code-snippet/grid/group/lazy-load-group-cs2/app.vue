<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :allowGrouping='true' :enableInfiniteScrolling='true' :groupSettings='groupSettings' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign= 'Right' width='80'></e-column>
        <e-column field='ProductName' headerText='Product Name' width='100'></e-column>
        <e-column field='ProductID' headerText='Product ID' width='80'></e-column>
        <e-column field='CustomerName' headerText='Customer Name' width='100'></e-column>
      </e-columns>
  </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Group, LazyLoadGroup, InfiniteScroll } from "@syncfusion/ej2-vue-grids";
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
      groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] }
    };
  },
  methods: { },
  provide: {
    grid: [Group, LazyLoadGroup, InfiniteScroll]
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>