<template>
  <div id="app">
   <div style="padding: 20px 0px 0px 0px">
      <ejs-button id="button" @click='onClick'>Clear Column Selection</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' :selectionSettings='selectionOptions'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
          width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120>
          </e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=130>
          </e-column>
          <e-column field='Freight' headerText='Freight' format= 'C2' 
          width=100></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const selectionOptions = { allowColumnSelection: true };
const onClick = function () {
  grid.value.ej2Instances.selectionModule.clearColumnSelection();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>