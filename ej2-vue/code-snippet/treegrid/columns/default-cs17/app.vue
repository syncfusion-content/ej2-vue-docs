

<template>
<div id="app">
        <ejs-treegrid  :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='315px'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width=110 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='name' headerText='Assignee' width=150 :valueAccessor='valueAccess' textAlign='Left'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { stringData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data() {
    return {
      data: stringData,
    };
    },
    methods:{
          valueAccess: function(field, data, column) {
              return data[field].map((s) => { return s.lastName || s.firstName; }).join(' ');
              }
  }
}
</script>



