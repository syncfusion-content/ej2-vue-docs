<template>
  <div id="app">
    <ejs-button id="restore" @click="clickHandler">Restore to initial state</ejs-button>
    <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :allowPaging='true'
      :allowFiltering='true'>
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

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: data
    };
  },
  methods: {
    clickHandler: function () {
      this.$refs.grid.ej2Instances.enablePersistence = false;
      window.localStorage.setItem("gridOrderDetails", "");
      this.$refs.grid.ej2Instances.destroy();
      location.reload();
    }
  },
  provide: {
    grid: [Page, Filter]
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