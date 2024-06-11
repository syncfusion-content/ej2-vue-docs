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
<script>
import {TreeGridComponent, RowDD, Selection, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

        data() {
            return {
                data: sampleData,
                selectionSettings: { type: 'Multiple' },
                rowDrop: { targetID: 'TreeGrid' },
                rowDrops: { targetID: 'DestTree' }
            };
        },
        provide: {
            treegrid: [RowDD, Selection]
        }
    }
</script>