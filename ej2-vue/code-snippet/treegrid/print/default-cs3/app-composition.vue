<template>
<div id="app">
        <ejs-treegrid :dataSource='data' printMode='CurrentPage' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbarOptions' :allowPaging='true' :pageSettings='pageSettings'>
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
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;
const toolbarOptions = ['print'];
const pageSettings = { pageSize: 8 };

provide('treegrid', [Page, Toolbar]);

</script>