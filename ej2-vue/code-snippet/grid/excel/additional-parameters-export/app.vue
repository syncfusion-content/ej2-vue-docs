<template>
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px'
        :allowExcelExport='true' :excelExportComplete='excelExportComplete' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { Query } from "@syncfusion/ej2-data";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
      queryClone: "",
      message:''
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') {
        this.queryClone = this.$refs.grid.ej2Instances.query;
        this.$refs.grid.ej2Instances.query = new Query().addParams('recordcount', '15');
        this.message =
          'Key: ' +
          this.$refs.grid.ej2Instances.query.params[0].key +
          ' and Value: ' +
          this.$refs.grid.ej2Instances.query.params[0].value + ' on ' + args.item.text;
        this.$refs.grid.excelExport();
      }
    },
    excelExportComplete() {
      this.$refs.grid.ej2Instances.query = this.queryClone;
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>