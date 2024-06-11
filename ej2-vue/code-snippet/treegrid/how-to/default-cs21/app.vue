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
<script>

import { TreeGridComponent, Page, Toolbar, PdfExport, ExcelExport, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: projectData,
      toolbarOptions: ['PdfExport', 'ExcelExport'],
      pageSettings: { pageSize: 5, pageCount:5 },
      queryClone: ""
    };
  },
  methods: {
    toolbarClick(args){
        if (args.item.text === 'PDF Export') {
            this.$refs.treegrid.showSpinner();
            this.$refs.treegrid.pdfExport();
        }
        else if (args.item.text === 'Excel Export') {
            this.$refs.treegrid.showSpinner();
            this.$refs.treegrid.excelExport();
        }
     },
    pdfExportComplete() {
        this.$refs.treegrid.hideSpinner();
     },
     excelExportComplete() {
        this.$refs.treegrid.hideSpinner();
     },
  },
  provide: {
    treegrid: [Page, Toolbar, PdfExport, ExcelExport]
  }
}
</script>