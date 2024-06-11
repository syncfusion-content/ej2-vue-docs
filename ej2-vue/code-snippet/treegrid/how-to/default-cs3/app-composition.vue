<template>
<div id="app">
        <ejs-button @click='changeHeader'>Change HeaderText</ejs-button>
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='280px' childMapping="subtasks" ref="treegrid">
        <e-columns>
          <e-column field="taskID" headerText="Task ID" width="70" textAlign="Right"></e-column>
          <e-column field="taskName" headerText="Task Name" width="100"></e-column>
          <e-column field="startDate" headerText="Start Date" format="yMd" width="90" textAlign="Right"></e-column>
          <e-column field="endDate" headerText="End Date" width="100" format="yMd" textAlign="Right"></e-column>
          <e-column field="duration" headerText="Duration" width="90" textAlign="Right" ></e-column>
          <e-column field="progress" headerText="Progress" width="90" textAlign="Right" ></e-column>
        </e-columns>
       </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";
import { ref } from "vue";

const treegrid = ref(null);

const data = sampleData;

const changeHeader = function() {
  let column =  treegrid.value.getColumnByField("duration");
  column.headerText = "Changed Text";
  treegrid.value.refreshColumns();
};

</script>