
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='220px' :allowPdfExport='true' :toolbarClick='toolbarClick' :pdfExportComplete="pdfExportComplete">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
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
        // pass fourth parameter as true to get the blob data of exported grid
        this.$refs.grid.pdfExport(null, null, null, true);
      }
    },
    pdfExportComplete(args) {
      // execute the promise to get the blob data
      args.promise.then((e) => {
        this.exportBlob(e.blobData);
      });
    },
    exportBlob(blob) {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      const url = window.URL.createObjectURL(blob); // Fix typo here
      a.href = url;
      a.download = 'Export';
      a.click();
      window.URL.revokeObjectURL(url); // Fix typo here
      document.body.removeChild(a);
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});