
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref='grid' id="Grid" height='220px' :dataSource='data' :toolbar='toolbarOptions':allowExcelExport='true'
        :toolbarClick='toolbarClick' :selectionSettings='selectionOption'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
      selectionOption: { type: 'Multiple', enableSimpleMultiRowSelection: true }

    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let selectedRecords = this.$refs.grid.getSelectedRecords();
        let exportProperties = {
          dataSource: selectedRecords
        };
        this.$refs.grid.excelExport(exportProperties);
      }
    },
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  },

});