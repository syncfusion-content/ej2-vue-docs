<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :allowPaging='true' :treeColumnIndex="1" idMapping='TaskID' parentIdMapping='parentID' ref="treegrid" :toolbar="toolbarOptions"  :allowPdfExport='true' :allowExcelExport='true' :pageSettings='pageSettings' :toolbarClick='toolbarClick' :excelExportComplete='excelExportComplete' :pdfExportComplete='pdfExportComplete'>
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="StartDate" headerText="Start Date" format="yMd" editType= 'datepickeredit' width="100" textAlign="Right"></e-column>
          <e-column field="EndDate" headerText="End Date" width="100" format="yMd" editType='datepickeredit' textAlign="Right"></e-column>
          <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
          <e-column field="Priority" headerText="Priority" width="90" textAlign="Left"></e-column>
        </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, PdfExport, ExcelExport,
  ColumnDirective as EColumn, ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

const treegrid = ref(null);

const data = projectData;

const toolbarOptions = ['PdfExport', 'ExcelExport'];

const pageSettings = { pageSize: 5, pageCount:5 };

const toolbarClick = function(args){
    if (args.item.text === 'PDF Export') {
        treegrid.value.showSpinner();
        treegrid.value.pdfExport();
    }
    else if (args.item.text === 'Excel Export') {
        treegrid.value.showSpinner();
        treegrid.value.excelExport();
    }
 
 };

const pdfExportComplete = function() {
    treegrid.value.hideSpinner();
 };

const excelExportComplete = function() {
    treegrid.value.hideSpinner();
 };

provide('treegrid',  [Page, Toolbar, PdfExport, ExcelExport]);

</script>