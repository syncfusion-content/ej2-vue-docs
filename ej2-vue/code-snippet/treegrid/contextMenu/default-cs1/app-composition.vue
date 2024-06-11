<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowSorting='true' :allowResizing='true' :editSettings='editSettings' :allowPdfExport='true' :allowExcelExport='true' :contextMenuItems="contextMenuItems">
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
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Resize, Sort, ContextMenu, Edit, Page, PdfExport, ExcelExport, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };

const pageSettings = { pageSize: 7 };

const contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
        'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
        'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage', 'Group', 'Ungroup', 'Indent', 'Outdent'
];

provide('treegrid',  [ Resize, Sort, ContextMenu, Edit, Page, PdfExport, ExcelExport ]);

</script>