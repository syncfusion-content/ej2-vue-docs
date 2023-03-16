

<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='parentData' :childGrid='childGrid' :toolbar='["ExcelExport"]' :toolbarClick='toolbarClick' :allowExcelExport='true'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                    <e-column field='LastName' headerText='Last Name' width=150></e-column>
                    <e-column field='City' headerText='City' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, DetailRow, Toolbar, ExcelExport, ExcelExportProperties } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      parentData: employeeData,
      childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
      }
    }
  },
  methods: {
      toolbarClick: function( args) {
        if (args['item'].id === 'Grid_excelexport') {
            let exportProperties = {
                hierarchyExportMode: "Expanded"
            };
            this.$refs.grid.excelExport(exportProperties);
        }
      }
  },
  provide: {
      grid: [DetailRow, Toolbar, ExcelExport]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


