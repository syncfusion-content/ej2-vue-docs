<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' height='220px' :dataSource='data' :toolbar='toolbarOptions'
    :allowExcelExport='true' :toolbarClick='toolbarClick' :dataBound="onDataBound"
     :excelQueryCellInfo="excelQueryCellInfo" :excelExportComplete="excelExportComplete">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='City' headerText='Ship City' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const grid = ref(null);
const gridcells= ref("");
const currentOrderID=ref(null);
const rowspanCount= ref(1)
const toolbarOptions = ['ExcelExport'];
const toolbarClick = function(args) {
  if (args.item.id === 'Grid_excelexport') { 
      grid.value.excelExport();
  }
};
const onDataBound= function() {
      let previousData= null;
      let startRowIndex = null;
      let endRowIndex= null;

      let rows =  grid.value.ej2Instances.getRows();
      let data =  grid.value.ej2Instances.getCurrentViewRecords();

      for (let i = 0, len = rows.length; i < len; i++) {
          if (!previousData) {
              previousData = data[i]['OrderID'];
              startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"));
          }
          else if (previousData === data[i]['OrderID']) {
              rows[i].children[0].classList.add('e-hide');
          }
          else if (previousData && previousData !== data[i]['OrderID']) {
              if (grid.value.ej2Instances.getRows().length > 0 && grid.value.ej2Instances.getRows().length > startRowIndex) {
                  endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                  let targetRow =  grid.value.ej2Instances.getRows()[startRowIndex];
                  let currentRowChild = rows[i] && rows[i].children[0];
                  if (targetRow && currentRowChild) {
                    let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                      parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                    );
                    if (targetCell[0]) {
                      targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex);
                    }
                  }
                  previousData = data[i]['OrderID'];
                  startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
              }
          }
          if (rows[i].children[0].classList.contains("e-hide") || i < len) {
              endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
              if (endRowIndex > 0) {
                let targetRow = grid.value.ej2Instances.getRows()[startRowIndex];  
                let currentRowChild = rows[i] && rows[i].children[0];
                if (targetRow && currentRowChild) {
                    let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                        parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                    );
                    if (targetCell.length > 0) {
                        targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex + 1);
                    }
                }
              }
          }
      }
      
  };
const excelQueryCellInfo = function(args) {

      if (!currentOrderID.value && args.column.field == "OrderID") {
          currentOrderID.value = args.data["OrderID"];
          gridcells.value = args.cell;
      }
      else if (currentOrderID.value && args.column.field == "OrderID" && currentOrderID.value == args.data["OrderID"]) {
        rowspanCount.value++;
      } else if (currentOrderID.value !== args.data["OrderID"] && args.column.field == "OrderID") {
          gridcells.value.rowSpan = rowspanCount.value;
          currentOrderID.value = args.data["OrderID"];
          gridcells.value = args.cell;
          rowspanCount.value = 1;
      }
  };
const excelExportComplete=function() {
      currentOrderID.value = null;
      gridcells.value = null;
      i.value=1;
    }
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