
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :pdfExportComplete='pdfExportComplete'
        :toolbarClick='toolbarClick'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=100></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
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
        if (args.item.id === 'Grid_pdfexport') {
            this.$refs.grid.getColumns()[1].visible = true;
            this.$refs.grid.getColumns()[3].visible = false;
            this.$refs.grid.pdfExport();
        }
    },
    pdfExportComplete() {
        this.$refs.grid.getColumns()[1].visible = false;
        this.$refs.grid.getColumns()[3].visible = true;
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});