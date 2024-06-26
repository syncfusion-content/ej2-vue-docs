
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick'>
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
      queryClone:'',
      message:''
    };
  },
  methods: {
    toolbarClick(args) {
        if (args.item.id === 'Grid_pdfexport') {
          this.queryClone = this.$refs.grid.query;
          this.$refs.grid.query = new Query().addParams('recordcount', '15');
          this.message =
              'Key: ' +
              this.$refs.grid.query.params[0].key +
              ' and Value: ' +
              this.$refs.grid.query.params[0].value + ' on ' + args.item.text;
          this.$refs.grid.pdfExport();
        }
    },
    pdfExportComplete(args) {
      this.$refs.grid.query = this.queryClone;
    },
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});