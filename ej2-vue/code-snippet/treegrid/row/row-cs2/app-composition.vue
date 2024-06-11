<template>
<div id="app">
<div style="display: inline-block">
        <ejs-treegrid id='TreeGrid' :dataSource="data" :allowRowDragAndDrop='true' height='315' :treeColumnIndex='1' :rowDropSettings='rowDrop' :selectionSettings='selectionSettings' childMapping='subtasks' >
            <e-columns>
                <e-column field="taskID" headerText="Task ID" width="120" isPrimaryKey="true"></e-column>
                <e-column field="taskName" headerText="Task Name" width="220"></e-column>
                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                <e-column field="duration" headerText="Duration" width="90"></e-column></e-columns>
        </ejs-treegrid>
        <ejs-treegrid id='DestTree' :allowRowDragAndDrop='true' height='315' :treeColumnIndex='1' :rowDropSettings='rowDrops' :selectionSettings='selectionSettings' childMapping='subtasks' >
            <e-columns>
                <e-column field="taskID" headerText="Task ID" width="120" isPrimaryKey="true"></e-column>
                <e-column field="taskName" headerText="Task Name" width="220"></e-column>
                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                <e-column field="duration" headerText="Duration" width="90"></e-column>
            </e-columns>
        </ejs-treegrid>
        </div>
</div>
</template>
<script setup>
import { provide } from "vue";
    
import {TreeGridComponent as EjsTreegrid, RowDD, Selection,
ColumnDirective as EColumn, ColumnsDirective as EColumns
} from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

const selectionSettings = { type: 'Multiple' };

const rowDrop = { targetID: 'TreeGrid' };

const rowDrops = { targetID: 'DestTree' };

provide('treegrid',  [RowDD, Selection]);

</script>