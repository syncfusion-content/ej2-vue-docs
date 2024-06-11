<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings'>
        <e-columns>
        <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='Task Name' width=180></e-column>
        <e-column field='duration' headerText='Duration' width=80  textAlign='Right'></e-column>
        <e-column  headerText='Commands' :commands='commands'  width=120></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Edit, CommandColumn, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { closest } from '@syncfusion/ej2-base';

const treegrid = ref(null);
const data = sampleData;
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,  mode: 'Row' };
const commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: onClick } }];

provide('treegrid',  [ Edit, CommandColumn ]);

const onClick = function(args) {
let rowIndex = (closest(args.target, '.e-row')).rowIndex;
let data = treegrid.value.ej2Instances.getCurrentViewRecords();
alert(JSON.stringify(data[rowIndex]));
};

</script>