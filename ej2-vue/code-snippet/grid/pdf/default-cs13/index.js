
import Vue from "vue";
import { GridPlugin, Group, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data, base64AlgeriaFont } from './datasource.js';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowGrouping='true' :groupSettings='groupOptions' :allowPdfExport='true' :toolbarClick='toolbarClick'>
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
      toolbarOptions: ['PdfExport'],
      groupOptions: { columns: ['ShipCity'] }
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        const pdfExportProperties = {
          theme: {
            header: {
              font: new PdfTrueTypeFont(base64AlgeriaFont, 12),
              fontColor: '#000080',
              bold: true,
              border: { color: '#5A5A5A', dashStyle: 'Solid' }
            },
            caption: {
              font: new PdfTrueTypeFont(base64AlgeriaFont, 10),
              fontColor: '#0B6623',
              bold: true,
            },
            record: {
              font: new PdfTrueTypeFont(base64AlgeriaFont, 9),
              fontColor: '#B22222',
              bold: true,
            }
          }
        };
        this.$refs.grid.pdfExport(pdfExportProperties);
      }
    }
  },
  provide: {
    grid: [Group, Toolbar, PdfExport]
  }

});