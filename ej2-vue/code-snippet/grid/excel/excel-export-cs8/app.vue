

<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' 
    :allowExcelExport='true' :toolbarClick='toolbarClick' :excelQueryCellInfo='excelQueryCellInfo'>
      <e-columns>
        <e-column field="Inventor" headerText="Inventor Name" width="180" textAlign="Right"></e-column>
        <e-column field="NumberofPatentFamilies" headerText="Number of Patent Families" width="180" textAlign="Right"></e-column>
        <e-column field="Country" headerText="Country" width="140" textAlign="Left"></e-column>
        <e-column field="Mainfieldsofinvention" headerText="Main fields of invention" width="200" textAlign="Left"></e-column>
        <e-column field="Number of INPADOC patents" headerText="Number of INPADOC patents" width="180" textAlign="Right"></e-column>
        <e-column field="TotalPatents" headerText="Total Patents" :visible='false' :valueAccessor="valueAccess" width="120"  textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport  } from "@syncfusion/ej2-vue-grids";
import { inventoryData } from './datasource.js';

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data() {
    return {
      data: inventoryData,
      toolbarOptions: ['ExcelExport'],
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        const excelExportProperties = {
          includeHiddenColumn: true,
        };
        this.$refs.grid.excelExport(excelExportProperties);
      }
    },
    valueAccess: function(field, data){
      const row = inventoryData.findIndex((item) => item.Inventor === data.Inventor) + 2;
      return '=E' + row + '+' + 'B' + row;
    },
    excelQueryCellInfo: function(args){
      if (args.column.field === 'TotalPatents') {
        args.value = this.valueAccess(args.column.field, (args.data));
        args.cell.formula = args.value;
      }
    },
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