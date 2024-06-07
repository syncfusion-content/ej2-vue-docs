<template>
<div id="app">
    <ejs-button id='reorderMultipleCols' @click='reorder'>Reorder TASK ID AND DURATION TO LAST</ejs-button>
        <ejs-treegrid ref='treegrid' :dataSource="data" childMapping='subtasks' :allowReordering='true' :treeColumnIndex='1' height='285px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Reorder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const treegrid = ref(null);

const data = sampleData;

provide('treegrid',  [ Reorder ]);

const reorder = function() {
    treegrid.value.reorderColumns(['taskID','duration'],'progress');
};

</script>