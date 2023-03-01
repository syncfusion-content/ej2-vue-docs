

<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='300px' :allowTextWrap='true' :textWrapSettings='wrapSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=75></e-column>
                <e-column field='startDate' headerText='Start Date' width=90 format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
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
      wrapSettings: { wrapMode: 'Content' }
    };
  },
}
</script>



