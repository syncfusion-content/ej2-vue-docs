

<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' printMode='CurrentPage' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :printComplete='printComplete'>
            <e-columns>
              <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
              <e-column field='taskName' headerText='Task Name' width='160'></e-column>
              <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
              <e-column field='duration' headerText='Duration' width='80' :visible='false' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      toolbarOptions: ['Print'],
    };
  },
  methods: {
      toolbarClick: function() {
          for (var i = 0; i < this.$refs.treegrid.ej2Instances.grid.getColumns().length; i++) {
            if (this.$refs.treegrid.ej2Instances.grid.getColumns()[i].field == "duration") {
              this.$refs.treegrid.ej2Instances.grid.getColumns()[i].visible = true;
            }
            else if (this.$refs.treegrid.ej2Instances.grid.getColumns()[i].field == "startDate") {
              this.$refs.treegrid.ej2Instances.grid.getColumns()[i].visible = false;
            }
        }
      },
      printComplete: function() {
          for (var i = 0; i < this.$refs.grid.getColumns().length; i++) {
            if (this.$refs.treegrid.grid.getColumns()[i].field == "duration") {
              this.$refs.treegrid.grid.getColumns()[i].visible = false;
            }
            else if (this.$refs.treegrid.grid.getColumns()[i].field == "startDate") {
              this.$refs.treegrid.grid.getColumns()[i].visible = true;
            }
        }
      }
  },
  provide: {
    treegrid: [ Page, Toolbar ]
  }
}
</script>



