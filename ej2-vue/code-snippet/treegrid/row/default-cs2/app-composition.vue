<template>
<div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' childMapping='subtasks' height='315px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right'  width='90'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right'  format='yMd' type='date' width='90'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width='80'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

</script>
<style>
  .e-grid .e-altrow {
    background-color: #fafafa;
  }
</style>