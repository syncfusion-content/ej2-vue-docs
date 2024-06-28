
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(TextBoxPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div>
      <label style="padding: 30px 17px 0 0">Enter file name: </label>
      <ejs-textbox ref='textbox' type="textbox" placeholder="Enter file name" width="120"></ejs-textbox>
      </div> 
      <ejs-grid ref='grid' id='Grid' style="margin-top: 5px" :dataSource='data' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' height='258px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
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
      if (args.item.id === "Grid_pdfexport") {
        if (this.$refs.textbox.$el.value) {
          const pdfExportProperties = {
            fileName: this.$refs.textbox.$el.value + '.pdf',
          };
          this.$refs.grid.pdfExport(pdfExportProperties);
        } else {
          const pdfExportProperties = {
            fileName: 'new.pdf',
          };
          this.$refs.grid.pdfExport(pdfExportProperties);
        }
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});