<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowExcelExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :queryCellInfo='queryCellInfo'
        :excelQueryCellInfo='excelQueryCellInfo'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, ExcelExport, ColumnDirective as EColumn,
ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const treegrid = ref(null);

const data = sampleData;
const pageSettings = { pageSize: 7 };
const toolbarOptions = ['ExcelExport'];

const toolbarClick = function(args) {
    if (args['item'].text === 'Excel Export') {
        treegrid.value.excelExport();
    }
};

const excelQueryCellInfo = function(args) {
    if(args.column.field == 'duration'){
        if(args.value === 0 || args.value === "") {
            args.style = {backColor: '#336c12'};
        }
        else if(args.value < 3) {
            args.style = {backColor: '#7b2b1d'};
        }
    }
};

const queryCellInfo = function(args) {
    if (args.data['duration'] == 0 && args.column.field === 'duration' ) {
        args.cell.style.background= '#336c12';
    } else if (args.data['duration'] < 3 && args.column.field === 'duration') {
        args.cell.style.background= '#7b2b1d';
    }
};

provide('treegrid',  [ Page, Toolbar, ExcelExport ]);

</script>