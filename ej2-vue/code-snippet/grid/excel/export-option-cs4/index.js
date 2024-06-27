
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
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
          Include or exclude hidden columns
        </label>
        <ejs-switch id="switch" ref='switch'></ejs-switch>
      </div>
        <ejs-grid style='margin-top:10px' ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='270px' :allowExcelExport='true' :toolbarClick='toolbarClick'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=120 :visible='false'></e-column>
              <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
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
    toolbarClick: function (args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let excelExportProperties = {
          includeHiddenColumn: this.$refs.switch.$el.checked
        };
        this.$refs.grid.excelExport(excelExportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  }

});