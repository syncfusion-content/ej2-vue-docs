<template>
<div id="app">
        <button v-on:click="Indenting()">Indent</button>
        <button v-on:click="Outdenting()">Outdent</button>
        <ejs-treegrid :dataSource='data' ref="treegrid" childMapping='subtasks' :treeColumnIndex='1' height='270px'>
        <e-columns>
                <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name'  width=180 ></e-column>
                <e-column field='priority' headerText='Priority' width=80 textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, RowDD, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

const treegrid = ref(null);

const Indenting = function() {
  treegrid.value.ej2Instances.grid.indent(treegrid.value.ej2Instances.grid.getCurrentViewRecords()[2]);
};

const Outdenting = function() {
  treegrid.value.ej2Instances.grid.outdent(treegrid.value.ej2Instances.grid.getCurrentViewRecords()[2]);
};

provide('treegrid',  [ RowDD ]);

</script>