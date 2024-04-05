
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: flex;">
        <label style="margin-right:5px">
        Enable or disable Horizontal Overflow property
        </label>
        <ejs-switch ref='switch' id="switch"></ejs-switch>
      </div>
      <ejs-grid ref='grid' id='Grid' style="margin-top: 5px" :dataSource='data' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' height='258px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
          <e-column field='ShipAddress' headerText='Ship Address' width=130></e-column>
          <e-column field='ShipRegion' headerText='Ship Region' width=90></e-column>
          <e-column field='ShipPostalCode' headerText='Ship PostalCode' width=90></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
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
        let pdfExportProperties = {
          allowHorizontalOverflow: !this.$refs.switch.$el.checked
        };
        this.$refs.grid.pdfExport(pdfExportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});