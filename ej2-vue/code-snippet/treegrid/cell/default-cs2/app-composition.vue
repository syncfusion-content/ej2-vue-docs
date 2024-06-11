<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='300px' :queryCellInfo='customiseCell'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right' ></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

const customiseCell = function(args) {
  if (args.column.field === 'progress' && +args.cell.innerHTML > 90 && +args.cell.innerHTML <= 100){
    args.cell.setAttribute('style', 'background-color:#336c12;color:white;');
} else if (+args.cell.innerHTML > 20 && args.column.field === 'progress') {
    args.cell.setAttribute('style', 'background-color:#7b2b1d;color:white;');
}
};

</script>