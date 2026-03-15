<template>
  <div id="app">
    <div style="display: flex;">
      <label style="margin-right:5px">
        <b> Enable Case Sensitivity </b> 
      </label>
      <ejs-switch id="switch" :change="onToggleCaseSensitive"></ejs-switch>
    </div>
    <ejs-grid style='margin-top:5px' :dataSource='data' :allowFiltering='true' :filterSettings='filterSettings' height='180px' >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCountry' headerText='ShipCountry' textAlign='Right' width=90></e-column>
        <e-column field='ShipCity' headerText='Ship City' textAlign='Right' width=120></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' textAlign='Right' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js'
export default {
  name: "App",
  components: {
  "ejs-switch":SwitchComponent,
  "ejs-grid":GridComponent,
  "e-columns":ColumnsDirective,
  "e-column":ColumnDirective
  },

  data() {
    return {
      data: data,
      filterSettings: {
       enableCaseSensitivity: false,
      }
    };
  },
  methods: {
    onToggleCaseSensitive: function (args) {
      this.filterSettings = {
        enableCaseSensitivity: args.checked,
      }
    }
  },
  provide: {
    grid: [Filter]
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