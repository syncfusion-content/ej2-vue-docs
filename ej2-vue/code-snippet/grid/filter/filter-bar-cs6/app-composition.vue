<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px' :load='load'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :allowFiltering='false' width=120></e-column>
        <e-column headerText='Action' width='150' :template="'columnTemplate'"></e-column>
      </e-columns>
      <template v-slot:columnTemplate>
        <div>
          <ejs-button>Custom Action</ejs-button>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
provide('grid',  [Filter]);

const filterOptions = { type: "FilterBar" };
const grid = ref(null);
const load = function() {
  grid.value.ej2Instances.columns[2].filterTemplate = '<span></span>';
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