
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
    <div style="display: inline-block;">
      <label style="padding:  10px 10px 12px 0"> Change the page orientation property: </label> 
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
      width="150" :dataSource="ddlData" :fields='fields' ></ejs-dropdownlist>
    </div>
    <ejs-grid ref='grid' id='Grid' style="margin-top: 5px" :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :toolbarClick='toolbarClick'>
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
      fields: { text: 'text', value: 'value' },
      ddlData: [
        { text: 'Portrait', value: 'Portrait' },
        { text: 'Landscape', value: 'Landscape' },
      ],
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        let pdfExportProperties = {
          pageOrientation: this.$refs.dropdown.$el.value,
        };
        this.$refs.grid.pdfExport(pdfExportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});