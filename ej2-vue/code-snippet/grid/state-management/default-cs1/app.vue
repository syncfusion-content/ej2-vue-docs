<template>
  <div id="app">
    <ejs-button id="restore" @click="clickHandler" content="Restore to initial state"></ejs-button>
    <br />
    <ejs-grid ref="grid" :id="gridId" :dataSource='data' :enablePersistence='true' :allowPaging='true'
      :allowFiltering='true' height='230px'>
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
      data: data,
      gridId: 'OrderDetails',
    };
  },
  methods: {
    clickHandler: function () {
      this.gridId = `OrderDetails` + Math.floor(Math.random() * 10);
      location.reload();
    }
  },
  provide: {
    grid: [Page, Filter]
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