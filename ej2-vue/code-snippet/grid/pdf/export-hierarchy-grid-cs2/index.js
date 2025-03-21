import Vue from "vue";
import { GridPlugin, DetailRow, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';
Vue.use(GridPlugin);
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='parentData' :childGrid='childGrid' :toolbar='["PdfExport"]'
       :toolbarClick='toolbarClick' :allowPdfExport='true' :exportDetailDataBound='exportDetailDataBound'>
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
      childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
          { field: 'ShipCity', headerText: 'Ship City', width: 150 },
          { field: 'OrderDate', headerText: 'Order Date', width: 120, type: 'date', format: { type: 'date', format: 'dd-MM-yyyy' }},
          { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
      }
    }
  },
  methods: {
    exportDetailDataBound(args) {
      args.childGrid.columns[2].format = { type: 'date',format: 'dd\\/MM\\/yyyy'};
    },
    toolbarClick: function (args) {
      if (args.item.id === 'Grid_pdfexport') {
        let exportProperties = {
          hierarchyExportMode: 'All',
        };
        this.$refs.grid.pdfExport(exportProperties);
      }
    }
  },
  provide: {
    grid: [DetailRow, Toolbar, PdfExport]
  }

});