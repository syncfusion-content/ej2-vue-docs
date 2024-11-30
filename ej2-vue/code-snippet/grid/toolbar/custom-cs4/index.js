
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data'  :allowExcelExport='true' :allowPdfExport='true' :toolbarTemplate='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' type='string' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' type='string' width=120></e-column>
      </e-columns>
    </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      toolbar: function () {
        return {
          template: Vue.component('custom-toolbar', {
            template: `<ejs-toolbar>
                        <div id="toolbar">
                          <ejs-button id="excelButton" cssClass='e-outline' v-on:click.native="exportAction">Excel Export</ejs-button>
                          <ejs-button id="pdfButton" cssClass='e-outline' v-on:click.native="exportAction">Pdf Export</ejs-button>
                          <ejs-button id="printButton" cssClass='e-outline' v-on:click.native="exportAction">Print</ejs-button>
                        </div>
                      </ejs-toolbar>`,
            data: function () {
              return {};
            },
            methods: {
              exportAction: function (args) {
                debugger
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

});