
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' 
    :allowExcelExport='true' :toolbarClick='toolbarClick' :excelHeaderQueryCellInfo='excelHeaderQueryCellInfo' :created='created'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>                
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
    };
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.excelExport();
      }
    },
    excelHeaderQueryCellInfo(args) {
      args.cell.value = '';
    },
    created() {
      var processGridExportObject =
      this.$refs.grid.ej2Instances.excelExportModule.__proto__.processGridExport;
      this.$refs.grid.ej2Instances.excelExportModule.__proto__.processGridExport = function (
        gobj,
        props,
        r
      ) {
        var rows = processGridExportObject.call(this, gobj, props, r);
        rows.shift();
        rows.forEach((item, index) => {
          item.index = index + 1;
        });
        return rows;
      };
    },
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  }
});