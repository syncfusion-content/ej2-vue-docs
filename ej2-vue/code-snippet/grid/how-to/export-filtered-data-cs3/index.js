
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport, Filter, Page, ExcelExport  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DataManager } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbarOptions' :allowPaging='true' :allowFiltering='true' :allowPdfExport='true' :allowExcelExport='true' :pageSettings='pageSettings' :toolbarClick='toolbarClick' :selectionSettings='selectionOption'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

      data: () => {
        return {
          data: data,
          toolbarOptions: ['PdfExport', 'ExcelExport'],
          pageSettings: { pageSize: 5, pageCount:5 },
          selectionOption: {type: 'Multiple'}

        };
      },
      methods: {
          toolbarClick(args: ClickEventArgs) {
              if (args['item'].id.indexOf("pdfexport") != -1) {
                  let selectedRecords = this.$refs.grid.getSelectedRecords();
                  let exportProperties = {
                      dataSource: selectedRecords
                    };
                      this.$refs.grid.pdfExport(exportProperties);
                }
              else if (args['item'].id.indexOf("excelexport") != -1) {
                  let selectedRecords = this.$refs.grid.getSelectedRecords();
                  let exportProperties = {
                      dataSource: selectedRecords
                      };
                        this.$refs.grid.excelExport(exportProperties);
                        }
                    },
                },
      provide: {
        grid: [Toolbar, PdfExport, Filter, Page, ExcelExport]
      },
    
});