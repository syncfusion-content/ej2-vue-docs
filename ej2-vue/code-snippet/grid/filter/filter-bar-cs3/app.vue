<template>
  <div id="app">
    <div style="display: flex;">
      <label style="margin-right:5px">
        <b> Show filter bar status </b> 
      </label>
      <ejs-switch id="switch" :checked="true" :change="onChange"></ejs-switch>
    </div>
    <ejs-grid style='margin-top:5px' :dataSource='data' :allowFiltering='true' :filterSettings='filterSettings' 
    allowPaging='true' :pageSettings="pageSettings" height='180px' >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Page } from "@syncfusion/ej2-vue-grids";
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
      pageSettings: { pageSize: 5 },
      filterSettings: {
        type: 'FilterBar'
      }
    };
  },
  methods: {
    onChange: function (args) {
      this.filterSettings = {
        showFilterBarStatus: args.checked,
      }
    }
  },
  provide: {
    grid: [Filter, Page]
  }
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