<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='parentData' :childGrid='childGrid' :toolbar='["ExcelExport"]' :toolbarClick='toolbarClick' :allowExcelExport='true' :exportDetailDataBound="exportDetailDataBound">
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
import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';
export default {
  name: "App",
  components: {
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
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
          { field: 'ShipCity', headerText: 'Ship City', width: 150 },
          { field: 'OrderDate', headerText: 'Order Date', width: 120, type: 'date', format: { type: 'date', format: 'dd-MM-yyyy' }},
          { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
      }
    }
  },
  methods: {
    exportDetailDataBound(args) {
      args.childGrid.columns[2].format = { type: 'date',format: 'dd\\/MM\\/yyyy'};
    },
    toolbarClick: function( args) {
      if (args.item.id === 'Grid_excelexport') {
        let exportProperties = {
          hierarchyExportMode: 'All',
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