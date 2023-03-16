

<template>
<div id="app">
    <ejs-button id='reorderMultipleCols' @click.native='reorder'>Reorder TASK ID AND DURATION TO LAST</ejs-button>
        <ejs-treegrid ref='treegrid' :dataSource="data" childMapping='subtasks' :allowReordering='true' :treeColumnIndex='1' height='285px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Reorder } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(TreeGridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: sampleData,
    };
  },
   provide: {
      treegrid: [ Reorder ]
    },
     methods:{
       reorder: function() {
          this.$refs.treegrid.reorderColumns(['taskID','duration'],'progress');
      }
  }
}
</script>



