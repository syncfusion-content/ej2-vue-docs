<template>
<div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='250px' childMapping="subtasks" ref="treegrid" :allowPaging="true"
        :pageSettings="pageSettings">
        <e-columns>
          <e-column field="taskID" headerText="Task ID" width="70" textAlign='Right'></e-column>
          <e-column field="taskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="startDate" headerText="Start Date" format="yMd" width="90" textAlign='Right'></e-column>
          <e-column field="endDate" headerText="Start Date" format="yMd" width="90" textAlign='Right'></e-column>
          <e-column field="duration" headerText="Duration" width="90" textAlign='Right'></e-column>
          <e-column field="progress" headerText="Progress" width="90" textAlign='Right'></e-column>
          <e-column field="priority" headerText="Priority" width="90"></e-column>
        </e-columns>
       </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;

const pageSettings = {pageSizes: ['5','10','All']};

provide('treegrid',  [Page]);

</script>