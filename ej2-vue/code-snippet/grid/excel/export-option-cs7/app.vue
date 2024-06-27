<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0">Enter file name: </label>
      <ejs-textbox ref='textbox' type="textbox" placeholder="Enter file name" width="120"></ejs-textbox>
    </div>
    <ejs-grid style='margin-top:10px' ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='270px'
    :allowExcelExport='true' :toolbarClick='toolbarClick'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-textbox":TextBoxComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
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
          fileName: this.$refs.textbox.$el.value !== "" ? this.$refs.textbox.$el.value + '.xlsx' : 'new.xlsx'
        };
        this.$refs.grid.excelExport(excelExportProperties);
      }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>