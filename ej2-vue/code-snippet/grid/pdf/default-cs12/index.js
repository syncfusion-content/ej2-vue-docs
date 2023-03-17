
import Vue from "vue";
import { GridPlugin, Toolbar, Page, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowPaging='true' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' height='258px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' type='number' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=140>
                </e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=120>
                </e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ["PdfExport"],
      pageSettings: { pageSize: 7 }
    };
  },
  methods: {
    toolbarClick(args) {
      if (args["item"].id === "Grid_pdfexport") {
        let exportProperties = {
          fileName: "new.pdf"
        };
        this.$refs.grid.pdfExport(exportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, Page, PdfExport]
  }

});