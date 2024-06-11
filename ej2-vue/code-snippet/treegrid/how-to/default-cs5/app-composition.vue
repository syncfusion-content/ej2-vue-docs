<template>
<div id="app">
      <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='300px' :queryCellInfo='queryCellInfoEvent' childMapping="subtasks" ref="treegrid">
        <e-columns>
          <e-column field="taskID" headerText="Task ID" width="70" textAlign="Right"></e-column>
          <e-column field="taskName" headerText="Task Name" width="100"></e-column>
          <e-column field="startDate" headerText="Start Date" format="yMd" width="90" textAlign="Right"></e-column>
          <e-column field="endDate" headerText="Start Date" format="yMd" width="90" textAlign="Right"></e-column>
          <e-column field="duration" headerText="Duration" width="90" textAlign="Right"></e-column>
        </e-columns>
       </ejs-treegrid>
</div>
</template>
<script setup>
/* eslint-disable */
import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { Tooltip } from "@syncfusion/ej2-popups";
import { sampleData } from "./datasource.js";

const data = sampleData;

const queryCellInfoEvent = function (args) {
     let tooltip = new Tooltip({
      content: args.data[args.column.field].toString()
    }, args.cell);
  };

</script>