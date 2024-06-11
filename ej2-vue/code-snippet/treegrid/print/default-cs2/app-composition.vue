<template>
<div id="app">
        <ejs-button id='print' @click='print'>Print</ejs-button>
        <ejs-treegrid ref='treegrid' :dataSource='data' height='265' childMapping='subtasks' :treeColumnIndex='1'>
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

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";
import { ref } from "vue";

const data = sampleData;
const treegrid = ref(null);

const print = function() {
    treegrid.value.print();
};

</script>