
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='220px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick' :excelExportComplete="excelExportComplete">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport', 'CsvExport']
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') {
        // pass fourth parameter as true to get the blob data of exported grid
        this.$refs.grid.excelExport(null, null, null, true);
      }
      if (args.item.id === 'Grid_csvexport') {
        // pass fourth parameter as true to get the blob data of exported grid
        this.$refs.grid.csvExport(null, null, null, true);
      }
    },
    excelExportComplete(args) {
      // execute the promise to get the blob data
      args.promise.then((e) => {
        this.exportBlob(e.blobData);
      });
    },
    exportBlob(blob){
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      const url = window.URL.createObjectURL(blob); // Fix typo here
      a.href = url;
      a.download = 'Export';
      a.click();
      window.URL.revokeObjectURL(url); // Fix typo here
      document.body.removeChild(a);
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport, Page]
  }

});