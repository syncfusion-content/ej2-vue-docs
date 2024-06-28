
import Vue from "vue";
import { GridPlugin, DetailRow, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Change the hierarchy export mode: </label> 
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="150" :dataSource="ddlData" :fields='fields'></ejs-dropdownlist>
      </div>
      <ejs-grid ref='grid' id='Grid' :dataSource='parentData' :childGrid='childGrid' :toolbar='["ExcelExport"]'
       :toolbarClick='toolbarClick' :allowExcelExport='true' style="margin-top: 10px">
        <e-columns>
          <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
          <e-column field='FirstName' headerText='FirstName' width=150></e-column>
          <e-column field='LastName' headerText='Last Name' width=150></e-column>
          <e-column field='City' headerText='City' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      parentData: employeeData,
      fields: { text: 'text', value: 'value' },
      ddlData: [
        { text: 'Expanded', value: 'Expanded' },
        { text: 'All', value: 'All' },
        { text: 'None', value: 'None' }
      ],
      childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
          { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
          { field: 'ShipCity', headerText: 'Ship City', width: 150 },
          { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
      }
    }
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.id === 'Grid_excelexport') {
        let exportProperties = {
          hierarchyExportMode: this.$refs.dropdown.$el.value,
        };
        this.$refs.grid.excelExport(exportProperties);
      }
    }
  },
  provide: {
    grid: [DetailRow, Toolbar, ExcelExport]
  }

});