
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport, DetailRow } from "@syncfusion/ej2-vue-grids";
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
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
        width="150" :dataSource="ddlData" :fields='fields'
        ></ejs-dropdownlist>
      </div>
      <ejs-grid style="margin-top: 10px" ref='grid' id='Grid' :dataSource='data'  :toolbar='toolbarOptions' height='272px'
       :allowPdfExport='true' :toolbarClick='toolbarClick' :childGrid='childGrid'>
        <e-columns>
          <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
          <e-column field='FirstName' headerText='FirstName' width=100></e-column>
          <e-column field='LastName' headerText='Last Name' width=100></e-column>
          <e-column field='City' headerText='City' width=100></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: employeeData,
      toolbarOptions: ['PdfExport'],
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
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
          { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ]
      }
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        var exportProperties = {
          hierarchyExportMode: this.$refs.dropdown.$el.value,
        };
        this.$refs.grid.pdfExport(exportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport, DetailRow]
  }

});