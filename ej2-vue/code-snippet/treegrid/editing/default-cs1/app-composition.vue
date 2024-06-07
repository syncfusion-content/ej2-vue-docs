<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' idMapping='TaskID' parentIdMapping='parentID' :treeColumnIndex='1' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
                <e-column field='TaskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width=180></e-column>
                <e-column field='StartDate' headerText='Start Date' editType= 'datepickeredit' type= 'date' format= 'yMd' textAlign='Right' width=170></e-column>
                <e-column field='Duration' headerText='Duration' width=80  textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Edit, Toolbar, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

const data = projectData;

const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };

provide('treegrid',  [ Edit, Toolbar ]);

</script>
<style>
 @import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>