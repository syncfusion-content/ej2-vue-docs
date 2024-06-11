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
<script>
/* eslint-disable */
import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { Tooltip } from "@syncfusion/ej2-popups";
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
    };
  },
  methods: {
    queryCellInfoEvent: function (args) {
         let tooltip = new Tooltip({
          content: args.data[args.column.field].toString()
        }, args.cell);
      },
  }
}
</script>