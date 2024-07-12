<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data'  :allowExcelExport='true' :allowPdfExport='true' :toolbarTemplate='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' type='string' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' type='string' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, PdfExport, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { ToolbarComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { createApp } from "vue";
const app = createApp();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      toolbar: function () {
        return {
          template: app.component('custom-toolbar', {
            components:{
              "ejs-toolbar":ToolbarComponent,
              "ejs-button":ButtonComponent
            },
            template: `<ejs-toolbar>
                        <div>
                          <ejs-button id="excelButton" cssClass='e-outline' v-on:click="exportAction">Excel Export</ejs-button>
                          <ejs-button id="pdfButton" cssClass='e-outline' v-on:click="exportAction">Pdf Export</ejs-button>
                          <ejs-button id="printButton" cssClass='e-outline' v-on:click="exportAction">Print</ejs-button>
                        </div>
                    </ejs-toolbar>`,
            data: function () {
              return {};
            },
            methods: {
              exportAction: function (args) {
                var grid = document.getElementById("Grid").ej2_instances[0];
                if (args.currentTarget.id === 'excelButton') {
                  grid.excelExport();
                }
                else if (args.currentTarget.id === 'pdfButton') {
                  grid.pdfExport();
                }
                else {
                  grid.print();
                }
              }
            }
          })
        };
      }
    };
  },
  provide: {
    grid: [Toolbar, PdfExport, ExcelExport]
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

#pdfButton,#printButton {
  margin-left: 5px;
}
#toolbar{
  margin-bottom: 5px;
}
</style>