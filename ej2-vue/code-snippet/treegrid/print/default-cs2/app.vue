

<template>
<div id="app">
        <ejs-button id='print' @click.native='print'>Print</ejs-button>
        <ejs-treegrid ref='treegrid' :dataSource='data' height='265' childMapping='subtasks' :treeColumnIndex='1'>
            <e-columns>
              <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
              <e-column field='taskName' headerText='Task Name' width='160'></e-column>
              <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
              <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
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
  data ()  {
    return {
      data: sampleData,
    };
  },
  methods: {
    print: function() {
        this.$refs.treegrid.print();
    }
  },
}
</script>



