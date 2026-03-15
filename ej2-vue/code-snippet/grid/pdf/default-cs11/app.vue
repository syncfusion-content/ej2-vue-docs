<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style="padding:  10px 10px 12px 0"> Change the page size property: </label> 
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
      width="150" :dataSource="ddlData" :fields='fields' ></ejs-dropdownlist>
    </div>
    <ejs-grid ref='grid' id='Grid' style="margin-top: 5px" :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :toolbarClick='toolbarClick'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport'],
      fields: { text: 'text', value: 'value' },
      ddlData: [
        { text: 'Letter', value: 'Letter' },
        { text: 'Note', value: 'Note' },
        { text: 'Legal', value: 'Legal' },
        { text: 'A0', value: 'A0' },
        { text: 'A1', value: 'A1' },
        { text: 'A2', value: 'A2' },
        { text: 'A3', value: 'A3' },
        { text: 'A4', value: 'A4' },
        { text: 'A5', value: 'A5' },
        { text: 'A6', value: 'A6' },
        { text: 'A7', value: 'A7' },
        { text: 'A8', value: 'A8' },
        { text: 'B0', value: 'B0' },
        { text: 'B1', value: 'B1' },
        { text: 'B2', value: 'B2' },
        { text: 'B3', value: 'B3' },
        { text: 'B4', value: 'B4' },
        { text: 'B5', value: 'B5' },
        { text: 'Archa', value: 'Archa' },
        { text: 'Archb', value: 'Archb' },
        { text: 'Archc', value: 'Archc' },
        { text: 'Archd', value: 'Archd' },
        { text: 'Arche', value: 'Arche' },
        { text: 'Flsa', value: 'Flsa' },
        { text: 'HalfLetter', value: 'HalfLetter' },
        { text: 'Letter11x17', value: 'Letter11x17' },
        { text: 'Ledger', value: 'Ledger' },
      ],
    };
  },
  methods: {
      toolbarClick(args) {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
          let pdfExportProperties = {
            pageSize: this.$refs.dropdown.ej2Instances.value
          };
          this.$refs.grid.pdfExport(pdfExportProperties);
        }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
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