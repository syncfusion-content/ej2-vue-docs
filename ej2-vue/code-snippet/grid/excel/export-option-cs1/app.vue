<template>
    <div id="app">
        <div style="display: inline-block;">
            <label style="padding:  10px 10px 12px 0"> Change export type: </label> 
            <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="150" :dataSource="dropDownData" :fields='fields'></ejs-dropdownlist>
        </div>
        <ejs-grid style="margin-top: 10px" ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' 
        height='220px' :allowPaging='true' :pageSettings='pageSettings' :allowExcelExport='true' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                <e-column field='LastName' headerText='Last Name' width=100></e-column>
                <e-column field='City' headerText='City' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport, Page } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent  } from "@syncfusion/ej2-vue-dropdowns";
import { employeeData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: employeeData,
      toolbarOptions: ['ExcelExport'],
      pageSettings : { pageSize: 6},
      fields: { text: 'text', value: 'value' },
       dropDownData : [
        { text: 'CurrentPage', value: 'CurrentPage' },
        { text: 'AllPages', value: 'AllPages' },
      ]
    };
  },
  methods: {
    toolbarClick: function(args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let excelExportProperties = {
          exportType: this.$refs.dropdown.$el.value,
        };
        this.$refs.grid.excelExport(excelExportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport, Page]
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