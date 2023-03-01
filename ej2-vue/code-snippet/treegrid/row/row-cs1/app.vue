

<template>
<div id="app">
        <ejs-treegrid id='TreeGrid' :dataSource="data" :allowRowDragAndDrop='true' height='315' :treeColumnIndex='1' :rowDropSettings='rowDrop'
         :selectionSettings='selectionSettings'
         childMapping='subtasks' >
            <e-columns>
                    <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, RowDD } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data () {
    return {
      data: sampleData,
      selectionSettings: { type: 'Multiple' },
      rowDrop: { targetID: 'destTree' }
    };
  },
    provide: {
    treegrid: [RowDD]
  }
}
</script>



