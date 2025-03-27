<template>
  <div id="app">
    <div style="padding-bottom: 20px">
      <ejs-button v-on:click="executeQuery">Execute Query</ejs-button>
    </div>
    <p v-if="statusMessage" style="text-align: center; color: red">{{ statusMessage }}</p>
    <ejs-grid ref="grid" id="grid" :dataSource="result" :allowPaging="true" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="160"></e-column>
        <e-column field="EmployeeID" headerText="Employee ID" width="120" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="150" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { provide } from "vue";
import { GridComponent as EjsGrid,ColumnsDirective as EColumns,ColumnDirective as EColumn,Page} from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { DataManager, WebApiAdaptor, Query } from "@syncfusion/ej2-data";

const SERVICE_URI = "https://ej2services.syncfusion.com/production/web-services/api/Orders";
const statusMessage = ref("");
const result = ref([]);
const dataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new WebApiAdaptor(),
});

const executeQuery = () => {
  statusMessage.value = "Fetching data...";
  const query = new Query();
  dataManager
    .executeQuery(query)
    .then((response) => {
      result.value = response.result;
      statusMessage.value = `Data fetched successfully! Total Records: ${response.result.length}`;
    })
    .catch((error) => {
      statusMessage.value = "Error fetching data!";
    });
};
provide('grid',  [Page]);
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
