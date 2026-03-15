<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' height='220px' :dataSource='data' :toolbar='toolbarOptions'
    :allowPdfExport='true' :toolbarClick='toolbarClick' :dataBound="onDataBound"
    :pdfQueryCellInfo="pdfQueryCellInfo" :pdfExportComplete="pdfExportComplete" >
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
  import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
  import { data } from './datasource.js';
  
  const grid = ref(null);
  
const toolbarOptions= ['PdfExport'];
const currentCell=ref("");
const currentOrderID= ref(null);
const cellIndexCount=ref(1) ;
  const toolbarClick= function(args) {
         if (args.item.id === 'Grid_pdfexport') { 
            grid.value.pdfExport();
        } 
      };
  const onDataBound=function() {
        let previousData= null;
        let startRowIndex = null;
        let endRowIndex= null;
        let rows = grid.value.ej2Instances.getRows();
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
                    let targetRow = grid.value.ej2Instances.getRows()[startRowIndex];
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
  const pdfQueryCellInfo=function(args) {
    if(!currentOrderID.value && args.column.field == "OrderID"){
            currentOrderID.value =  args.data["OrderID"];
            currentCell.value= args.cell;
        }
        else if(currentOrderID.value && args.column.field == "OrderID" &&  currentOrderID.value ==args.data["OrderID"]){
          cellIndexCount.value ++;
        } else if(currentOrderID.value !== args.data["OrderID"] && args.column.field == "OrderID") {
           currentCell.value.rowSpan = cellIndexCount.value;
          currentOrderID.value = args.data["OrderID"];
          currentCell.value=args.cell;
          cellIndexCount.value = 1 ;
        }
      };
       // Reset the pdf export global variable values
  const pdfExportComplete=function(){
        currentOrderID.value=null;
        currentCell.value=null;
        cellIndexCount.value =1;
  }
  provide('grid',  [Toolbar, PdfExport]);
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