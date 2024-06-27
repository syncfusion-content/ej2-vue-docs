
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' 
    :allowExcelExport='true' :toolbarClick='toolbarClick'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width='130' :format="formatOption" textAlign='Right'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>            
        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
      formatOption: { type: 'date', format: "ccc, LLL d, yy" }
    };
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.excelExport();
      }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  }
});