<template>
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='inventoryData' :toolbar='toolbarOptions' height='272px' 
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
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { inventoryData } from './datasource.js';
const grid = ref(null);
const toolbarOptions = ['ExcelExport'];
const toolbarClick = function(args) {
  if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
    const excelExportProperties = {
      includeHiddenColumn: true,
      };
    grid.value.excelExport(excelExportProperties);
  }
};
const valueAccess= function(field, data){
  const row = inventoryData.findIndex((item) => item.Inventor === data.Inventor) + 2;
  return '=E' + row + '+' + 'B' + row;
};
const excelQueryCellInfo= function(args){
  if (args.column.field === 'TotalPatents') {
    args.value = valueAccess(args.column.field, (args.data));
    args.cell.formula = args.value;
  }
};
  provide('grid',  [Toolbar, ExcelExport]);
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