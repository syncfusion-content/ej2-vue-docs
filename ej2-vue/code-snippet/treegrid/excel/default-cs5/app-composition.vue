<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowExcelExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :excelExportComplete='excelExportComplete'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' :visible='false' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, ExcelExport, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const treegrid = ref(null);
const data = sampleData;
const pageSettings = { pageSize: 7 };
const toolbarOptions = ['ExcelExport'];

const toolbarClick = function(args) {
    if (args['item'].text === 'Excel Export') {
      treegrid.value.ej2Instances.grid.getColumns()[2].visible = false;
      treegrid.value.ej2Instances.grid.getColumns()[3].visible = true;
      treegrid.value.excelExport();
    }
};

const excelExportComplete = function() {
  treegrid.value.ej2Instances.grid.getColumns()[2].visible = true;
  treegrid.value.ej2Instances.grid.getColumns()[3].visible = false;
};

provide('treegrid',  [ Page, Toolbar, ExcelExport ]);

</script>