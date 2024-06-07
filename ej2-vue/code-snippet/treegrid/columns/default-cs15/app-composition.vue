<template>
<div id="app">
        <ejs-button @click="show"> Show </ejs-button>
        <ejs-button @click="hide"> Hide </ejs-button>
        <ejs-treegrid ref=treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' :height='270'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText='Start Date' width=90 format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref } from "vue";

const treegrid = ref(null);

const data = sampleData;

const show = function() {
    treegrid.value.showColumns(['Task ID', 'Duration']); // show by HeaderText
};

const hide = function() {
    treegrid.value.hideColumns(['Task ID', 'Duration']); // hide by HeaderText
};

</script>