<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbar' :toolbarClick='toolbarClick' :editSettings='editSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Toolbar, Edit, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data ()  {
    return {
      data: sampleData,
      toolbar: ['ExpandAll', 'CollapseAll', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-time', id: 'Click' }],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    };
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.text === 'Click') {
        alert("Custom toolbar click...");
      }
    }
  },
  provide: {
      treegrid: [ Toolbar, Edit ]
  }
}
</script>