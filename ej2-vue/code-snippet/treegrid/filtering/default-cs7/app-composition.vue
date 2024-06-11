<template>
<div id="app">
 <div style="padding-top: 7px; display: inline-block">Hierarchy Mode</div>
  <div style="display: inline-block; width: 150px">
<ejs-dropdownlist id='mode' :dataSource='ddldata'  :fields='fields' :value='value' :popupHeight='height' :change='change'></ejs-dropdownlist>
</div>
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1'  :allowFiltering='true' height='225px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='75' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Filter,
ColumnDirective as EColumn, ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';
import { sampleData } from "./datasource.js";

const treegrid = ref(null);

const data = sampleData;
const height = '220px';
const ddldata = [{ id: 'Parent', mode: 'Parent' },
{ id: 'Child', mode: 'Child' },
{ id: 'Both', mode: 'Both' },
{ id: 'None', mode: 'None' }
];

const fields = { text: 'mode', value: 'id' };

const value = 'Parent';

const change = function (e) {
    let mode = e.value;
    treegrid.value.ej2Instances.filterSettings.hierarchyMode = mode;
    treegrid.value.ej2Instances.clearFiltering();
};

provide('treegrid',  [ Filter ]);

</script>