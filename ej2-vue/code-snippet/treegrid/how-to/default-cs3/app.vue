

<template>
<div id="app">
        <ejs-button @click.native='changeHeader'>Change HeaderText</ejs-button>
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
<script>
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: sampleData,
    };
  },
  methods: {
    changeHeader: function() {
      let column =  this.$refs.treegrid.getColumnByField("duration");
      column.headerText = "Changed Text";
      this.$refs.treegrid.refreshColumns();
    },
  }
}
</script>



