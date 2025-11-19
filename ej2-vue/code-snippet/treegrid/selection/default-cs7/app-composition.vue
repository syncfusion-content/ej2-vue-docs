<template>
<div id="app">
        <ejs-treegrid :dataSource='data' idMapping='TaskID' parentIdMapping='ParentID' :treeColumnIndex='1' :enableVirtualization="true"  :selectionSettings='selectionOptions' :isRowSelectable="isRowSelectable" >
            <e-columns>
                <e-column type="checkbox" width=90></e-column>
                        <e-column field='Task'  headerText='Task'  width=300></e-column>
                        <e-column field='TaskID' isPrimaryKey="true" visible="false"></e-column>
                        <e-column field='AssignedTo'  headerText='Assigned To'  width=140></e-column>
                        <e-column field='StartDate' headerText='Start' format='yMd' width=180></e-column>
                        <e-column field='DueDate' headerText='Due' format='yMd' width=180></e-column>
                        <e-column field='Priority' headerText='Priority' width=90></e-column>
                        <e-column field='Progress' headerText='Progress' width=110></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, VirtualScroll, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

const selectionOptions= { persistSelection:true };
const isRowSelectable = function(data, columns) {
   return data.Progress !== 'Completed';
};
provide('treegrid',  [ VirtualScroll ]);


</script>