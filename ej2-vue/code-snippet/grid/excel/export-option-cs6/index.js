
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowFiltering='true' :toolbar='toolbarOptions' height='270px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
              <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width=150 ></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport']
    };
  },
  methods: {
      toolbarClick: function(args) {
         if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            let excelExportProperties = {
                enableFilter: true
            };
            this.$refs.grid.excelExport(excelExportProperties);
        }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport, Filter]
  }

});