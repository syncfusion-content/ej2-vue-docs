<template>
    <div id="app">
        <ejs-treegrid :dataSource='treeGridData' :enableAutoFill='true' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' height='220px' :selectionSettings='selectionOptions' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Edit, Page, Toolbar, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const treeGridData = sampleData;

const pageSettings = { pageSize: 10 };

const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };

const toolbar = ['Add', 'Update', 'Cancel'];

const selectionOptions = { type: 'Multiple', mode: 'Cell', cellSelectionMode: 'Box' };

provide('treegrid',  [ Edit, Page, Toolbar ]);

</script>