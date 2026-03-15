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
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
