<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
                <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' editType= 'stringedit' width=170 ></e-column>
                <e-column field='startDate' headerText='Start Date' editType= 'datetimepickeredit' :edit='dateParams' :format='formatOptions' textAlign='Right' width=170></e-column>
                <e-column field='approved' headerText='Approved' editType= 'booleanedit' type='boolean' width=110 displayAsCheckBox='true' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width=120 editType= 'numericedit' :edit='progressParams' textAlign='Right'></e-column>
                 <e-column field='priority' headerText='Priority' editType= 'dropdownedit'  width=110 textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Edit, Toolbar, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

const toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
const formatOptions = {type:'dateTime', format:'M/d/y hh:mm a'};
const dateParams = { params: {format: 'M/d/y hh:mm a' } };
const progressParams = { params: {format: 'n' } };

provide('treegrid',  [ Edit, Toolbar ]);

</script>