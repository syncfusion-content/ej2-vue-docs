
import Vue from "vue";
import { GridPlugin, Toolbar, Group, Page, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref='grid' id="Grid" height='220px' :dataSource='data' :toolbar='toolbarOptions' :allowExcelExport='true'
        :toolbarClick='toolbarClick' :allowPaging='true' :allowGrouping='true' :groupSettings='groupOptions'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
      groupOptions : { columns: ['CustomerID', 'ShipCity'] },

    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.excelExport();
      }
    },
  },
  provide: {
    grid: [Toolbar, ExcelExport, Group, Page]
  },

});