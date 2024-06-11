<template>
<div id="app">
        <ejs-treegrid ref='treegrid':dataSource="data" :treeColumnIndex='1' :allowPaging='true' :allowSorting='true' :sortSettings='sortSettings' :showColumnMenu='true' childMapping='subtasks' :columnMenuItems='columnMenuItems' :columnMenuClick='columnMenuClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width=90></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width=80></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Sort, ColumnMenu, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const treegrid = ref(null);

const data = sampleData;
const columnMenuItems = [{text:'Clear Sorting', id:'clearsorting'}];
const sortSettings = {columns:[{direction: "Ascending", field: "taskID"}]};

const columnMenuClick = function(args) {
    if(args.item.id === 'clearsorting'){
        treegrid.value.clearSorting();
    }
};

provide('treegrid',  [Sort, ColumnMenu, Page]);

</script>