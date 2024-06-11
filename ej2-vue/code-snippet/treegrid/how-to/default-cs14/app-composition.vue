<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :allowPaging='true' :treeColumnIndex="1" idMapping='TaskID' parentIdMapping='parentID' ref="treegrid" :toolbar="toolbarOptions"  :allowPdfExport='true' :allowExcelExport='true' :pageSettings='pageSettings' :toolbarClick='toolbarClick' :selectionSettings='selectionOption'>
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
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, PdfExport, ExcelExport ,
ColumnDirective as EColumn, ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

const data = projectData;
const treegrid = ref(null);

const toolbarOptions = ['PdfExport', 'ExcelExport'];
const pageSettings = { pageSize: 5, pageCount:5 };
const selectionOption = {type: 'Multiple'};

const toolbarClick = function(args){
    if (args['item'].id.indexOf("pdfexport") != -1) {
       let selectedRecords = treegrid.value.getSelectedRecords();
             let exportProperties = {
                 dataSource: selectedRecords
             };
           treegrid.value.pdfExport(exportProperties);
       }
     else if (args['item'].id.indexOf("excelexport") != -1) {
         let selectedRecords = treegrid.value.getSelectedRecords();
         let exportProperties = {
             dataSource: selectedRecords
         };
       treegrid.value.excelExport(exportProperties);
    }
 };

provide('treegrid',  [Page, Toolbar, PdfExport, ExcelExport]);

</script>