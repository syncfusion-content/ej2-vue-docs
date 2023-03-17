

<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='210px' :created='setHeaderHeight' childMapping="subtasks" ref="treegrid">
        <e-columns>
          <e-column field="taskID" headerText="Task ID" width="70" textAlign="Right"></e-column>
          <e-column field="taskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="startDate" headerText="Start Date" format="yMd" textAlign="Right" width="90"></e-column>
          <e-column field="endDate" headerText="End Date" width="90" format="yMd" :customAttributes= "{class: 'orientationcss'}" textAlign="Center"></e-column>
          <e-column field="duration" headerText="Duration" width="90" textAlign="Right"></e-column>
          <e-column field="progress" headerText="progress" width="90" textAlign="Right"></e-column>
        </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data() {
    return {
      data: sampleData,
    };
  },
  methods: {
    setHeaderHeight: function(args) {
      let textWidth = document.querySelector(".orientationcss > div").scrollWidth; //Obtain the width of the headerText content.
      let headerCell = document.querySelectorAll(".e-headercell");
      for (let i = 0; i < headerCell.length; i++) {
        headerCell.item(i).style.height = textWidth + "px"; //Assign the obtained textWidth as the height of the headerCell.
      }
    },
  }
}
</script>
<style>
   .orientationcss .e-headercelldiv {
    transform: rotate(90deg);
    padding-top:5px;
}
</style>



