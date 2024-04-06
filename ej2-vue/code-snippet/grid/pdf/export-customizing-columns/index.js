
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' height='258px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ["PdfExport"],
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        var pdfExportColumns = [
          { field: 'OrderID', textAlign: 'Right', width: '90' },
          { field: 'CustomerID', headerText: 'Customer Name', width: '100' },
          { field: 'Freight', textAlign: 'Center', width: '80' },
        ];
        let pdfExportProperties = {
          columns: pdfExportColumns
        };
        this.$refs.grid.pdfExport(pdfExportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});