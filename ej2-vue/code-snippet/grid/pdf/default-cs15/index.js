
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowPaging='true' :toolbar='toolbarOptions' :allowPdfExport='true' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick' height='272px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ProductName' headerText='Product Name' width=110></e-column>
            <e-column field='Quantity' headerText='Quantity' width=100></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport']
    };
  },
  methods: {
    toolbarClick(args) {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
          this.$refs.grid.showSpinner();
          this.$refs.grid.pdfExport();
        }
    },
    pdfExportComplete(args) {
        this.$refs.grid.hideSpinner();
    },
  },
  provide: {
    grid: [Toolbar, PdfExport, Page]
  }

});