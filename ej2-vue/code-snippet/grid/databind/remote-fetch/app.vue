<template>
  <div id="app">
    <div style="padding-bottom:20px">
      <ejs-button ref='button' v-on:click="executeQuery">Execute Query</ejs-button>
    </div>
    <p v-if="statusMessage" style="text-align:center;color:red">{{ statusMessage }}</p>
    <ejs-grid ref="grid" id="grid" :dataSource="result" height="315px">
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
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor, Query } from "@syncfusion/ej2-data";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

const SERVICE_URI = "https://ej2services.syncfusion.com/production/web-services/api/Orders";

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent,
  },
  data() {
    return {
      statusMessage: "",
      result: [],
      dataManager: new DataManager({
        url: SERVICE_URI,
        adaptor: new WebApiAdaptor(),
      }),
    };
  },
  methods: {
    executeQuery: function(args) {
      this.statusMessage = "Fetching data...";
      const query = new Query();
      this.dataManager
        .executeQuery(query)
        .then((response) => {
          this.result = response.result;
          this.statusMessage = `Data fetched successfully! Total Records: ${response.result.length}`;
        })
        .catch((error) => {
          this.statusMessage = "Error fetching data!";
        });
    },
  },
  provide: {
    grid: [Page]
  },
};
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
