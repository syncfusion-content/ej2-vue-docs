<template>
  <div id="app">
    <ejs-grid :dataSource="data" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="150"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
        <e-column field="Freight" headerText="Freight" width="150" :template="'columnTemplate'" >
        </e-column>
      </e-columns>
      <template v-slot:columnTemplate="{data}">
            <div>
              <ejs-progressbar id='data.OrderID' type='Linear' height='60' :value='data.Freight' trackThickness=24 progressThickness='20'
              ></ejs-progressbar>
            </div>
          </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns} from "@syncfusion/ej2-vue-grids";
import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";
import { data } from './datasource.js';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
