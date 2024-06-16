<template>
  <div id="app">
    <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px'
      :editSettings='editSettings' :actionFailure='actionFailure'>
      <e-columns>
        <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='Task Name' width=180></e-column>
        <e-column field='startDate' headerText='Start Date' editType='datepickeredit' type='date' format='yMd'
          textAlign='Right' width=170></e-column>
        <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
      </e-columns>
    </ejs-treegrid>
  </div>
</template>
<script>

import { TreeGridComponent, Edit, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

export default {
  name: "App",
  components: {
    "ejs-treegrid": TreeGridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,

  },

  data() {
    return {
      data: sampleData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    };
  },
  provide: {
    treegrid: [Edit]
  },
  methods: {
    actionFailure: function (args) {
      let span = document.createElement('span');
      let treegrid = document.getElementsByClassName("e-treegrid")[0].ej2_instances[0];
      treegrid.element.parentNode.insertBefore(span, treegrid.element);
      span.style.color = '#FF0000'
      span.innerHTML = args.error[0];
    }
  }
}
</script>