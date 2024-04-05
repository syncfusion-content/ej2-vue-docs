
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data'  gridLines='Both' :toolbar='toolbarOptions' height='272px'
       :allowPdfExport='true' :toolbarClick='toolbarClick' :pdfQueryCellInfo='pdfQueryCellInfo' :queryCellInfo='queryCellInfo'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='Freight' headerText='Freight' width=80></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
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
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.pdfExport();
      }
    },
    queryCellInfo(args) {
      let data = args.data.OrderID;
      switch (data) {
        case 10248:
          if (args.column.field === 'CustomerID') {
            args.rowSpan = 2;
          }
          break;
        case 10250:
          if (args.column.field === 'CustomerID') {
            args.colSpan = 2;
          }
          break;
        case 10252:
          if (args.column.field === 'OrderID') {
            args.rowSpan = 3;
          }
          break;
        case 10256:
          if (args.column.field === 'CustomerID') {
            args.colSpan = 3;
          }
          break;
        case 10261:
          if (args.column.field === 'Freight') {
            args.colSpan = 2;
          }
          break;
      }
    },
    pdfQueryCellInfo(args) {
      let data = args.data.OrderID;
      switch (data) {
        case 10248:
          if (args.column.field === 'CustomerID') {
            args.cell.rowSpan = 2;
          }
          break;
        case 10250:
          if (args.column.field === 'CustomerID') {
            args.colSpan = 2;
          }
          break;
        case 10252:
          if (args.column.field === 'OrderID') {
            args.cell.rowSpan = 3;
          }
          break;
        case 10256:
          if (args.column.field === 'CustomerID') {
            args.colSpan = 3;
          }
          break;
        case 10261:
          if (args.column.field === 'Freight') {
            args.colSpan = 2;
          }
          break;
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});