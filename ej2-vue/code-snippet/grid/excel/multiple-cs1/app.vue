<template>
    <div id="app">
        <p><b>First Grid:</b></p>
        <ejs-grid ref='firstGrid' id='FirstGrid' :dataSource='firstData' :toolbar='toolbarOptions' 
        :allowExcelExport='true' :exportGrids='exportGrids' :toolbarClick='toolbarClick'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
          </e-columns>
        </ejs-grid>
        <p><b>Second Grid:</b></p>
        <ejs-grid ref='secondGrid' id='SecondGrid' :dataSource='secondData' :allowExcelExport='true'>
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
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
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
      firstData: data,
      secondData: employeeData,
      toolbarOptions: ['ExcelExport'],
      exportGrids: ['FirstGrid', 'SecondGrid'],
    };
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.id === 'FirstGrid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let appendExcelExportProperties = {
          multipleExport: { type: 'AppendToSheet', blankRows: 2 }
        };
        this.$refs.firstGrid.excelExport(appendExcelExportProperties, true);
      }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport]
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