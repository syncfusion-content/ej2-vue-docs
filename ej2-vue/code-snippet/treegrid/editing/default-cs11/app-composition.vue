<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
        <e-column field='taskID' :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='Task Name' width=180></e-column>
        <e-column field='startDate' headerText='Start Date' editType= 'datepickeredit' type='date' format='yMd' textAlign='Right' width=170></e-column>
        <e-column field='priority' headerText='Priority' width=110 defaultValue='Normal'></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Edit, Toolbar, ColumnDirective as EColumn,
ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell', showDeleteConfirmDialog: true };
const toolbar = ['Add', 'Delete', 'Update', 'Cancel'];

provide('treegrid',  [ Edit, Toolbar ]);

</script>