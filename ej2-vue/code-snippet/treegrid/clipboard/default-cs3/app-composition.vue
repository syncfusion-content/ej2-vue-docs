<template>
    <div id="app">
    <div style="padding-top: 7px; float:left">Hierarchy Mode</div><div style="padding-left: 10px; display: inline-block">
            <ejs-dropdownlist id='ddlelement' :dataSource='dropData' value='Parent' :fields='fields' :change="onChange"></ejs-dropdownlist></div>
        <ejs-treegrid ref=treegrid :dataSource='treeGridData' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' copyHierarchyMode='Parent' :pageSettings='pageSettings' height='230px' :selectionSettings='selectionOptions'>
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
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./datasource.js";

const treegrid = ref(null);

const treeGridData = sampleData;
const pageSettings = { pageSize: 10 };

const selectionOptions = { type: 'Multiple'};

const fields =  { text: 'mode', value: 'id' };

const dropData = [
    { id: 'Parent', mode: 'Parent' },
    { id: 'Child', mode: 'Child' },
    { id: 'Both', mode: 'Both' },
    { id: 'None', mode: 'None' },
];

const onChange = function(e) {
  let mode = e.value.toString();
  treegrid.value.ej2Instances.copyHierarchyMode = mode;
};

provide('treegrid',  [ Page ]);

</script>