<template>
  <div id="app">
    <ejs-button @click='expand'>Expand All</ejs-button>
    <ejs-button style='margin-left:5px' @click='collapse'>Collapse All</ejs-button>
    <ejs-grid style="margin-top:10px" ref='grid' :dataSource='parentData' height='265px' :childGrid='childGrid'>
        <e-columns>
          <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
          <e-column field='FirstName' headerText='FirstName' width=100></e-column>
          <e-column field='LastName' headerText='Last Name' width=100></e-column>
          <e-column field='City' headerText='City' width=100></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data, employeeData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      parentData: employeeData,
      childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ]
      }
    }
  },
  methods: {
    expand: function() {
      this.$refs.grid.ej2Instances.detailRowModule.expandAll();
    },
    collapse: function() {
      this.$refs.grid.ej2Instances.detailRowModule.collapseAll();
    }
  },
  provide: {
      grid: [DetailRow]
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