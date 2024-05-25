<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data"  height='315' :dataBound="dataBound">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>           
            <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
            <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ref } from 'vue';

const grid = ref(null);
    const dataBound = function() {
      let header = grid.value.getHeaderContent().querySelector('.e-headercell');
      header.style.backgroundColor = 'red';
      header.style.color = 'white';
      let cell = grid.value.getCellFromIndex(1, 2);
      cell.style.background = '#f9920b';
      cell.style.color = 'white';
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