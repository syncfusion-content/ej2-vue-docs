
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' :allowPdfExport='true' :toolbarClick='toolbarClick' :selectionSettings='selectionOption'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      toolbarOptions: ['PdfExport'],
      selectionOption: { type: 'Multiple', enableSimpleMultiRowSelection: true }
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        let selectedRecords = this.$refs.grid.getSelectedRecords();
        let pdfExportProperties = {
          dataSource: selectedRecords
        };
        this.$refs.grid.pdfExport(pdfExportProperties);
      }
    },
  },
  provide: {
    grid: [Toolbar, PdfExport]
  },

});