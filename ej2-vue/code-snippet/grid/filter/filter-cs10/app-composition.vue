<template>
    <div id="app">
      <ejs-message v-if="showWarning" id="msg_warning" content="No Records" cssClass="e-content-center" severity="Warning" style="margin-bottom:5px"
      ></ejs-message>
      <ejs-button cssClass="e-success" v-on:click="click">Get Filtered Data</ejs-button>
      <ejs-button style='margin-left:5px' cssClass="e-danger" v-on:click="clear">Clear</ejs-button>
      <ejs-grid style="margin-top:5px" ref="grid" :dataSource="data" :allowFiltering="true" :allowPaging="true" :height="280">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        </e-columns>
      </ejs-grid>
      <div v-if="showRecords" class="e-content">
        <h3>Filtered Records</h3>
        <ejs-grid ref="filteredgrid" :dataSource="filteredData" :allowPaging="true" :height="200">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
            <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
            <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { MessageComponent as EjsMessage } from "@syncfusion/ej2-vue-notifications";
import { data } from './datasource.js';
const grid = ref(null);
const filteredData = ref(null);
const showRecords = ref(false);
const showWarning = ref(false);
const click = function () {
 filteredData.value = grid.value.getFilteredRecords();
  if (filteredData.value.length) {
    showRecords.value = true;
    showWarning.value = false;
  } else {
    showRecords.value = false;
    showWarning.value = true;
  }
};
const clear = function () {
  grid.value.clearFiltering();
  showRecords.value = false;
  showWarning.value = false;
}
provide('grid', [Filter, Page]);
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
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material3.css";
</style>