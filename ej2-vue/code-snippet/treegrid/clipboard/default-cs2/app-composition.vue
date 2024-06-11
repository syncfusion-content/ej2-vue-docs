<template>
<div id="app">
<ejs-button id='copy' @click.native='copy'>Copy</ejs-button>
        <ejs-button id='copyHeader' @click.native='copyHeader'>CopyHeader</ejs-button>
        <ejs-treegrid ref=treegrid :dataSource='treeGridData' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' height='230px' :selectionSettings='selectionOptions'>
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

import { TreeGridComponent as EjsTreegrid, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";

const treegrid = ref(null);

const treeGridData = sampleData;
const pageSettings = { pageSize: 10 };
const selectionOptions = { type: 'Multiple'};

const copy = function() {
    treegrid.value.copy();
};

const copyHeader = function() {
    treegrid.value.copy(true);
};

provide('treegrid',  [ Page ]);

</script>