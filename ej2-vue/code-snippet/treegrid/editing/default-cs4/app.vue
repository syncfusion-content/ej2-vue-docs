<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings'>
        <e-columns>
        <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='Task Name' width=180></e-column>
        <e-column field='duration' headerText='Duration' width=80  textAlign='Right'></e-column>
        <e-column  headerText='Commands' :commands='commands'  width=120></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Edit, CommandColumn, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { closest } from '@syncfusion/ej2-base';

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: sampleData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,  mode: 'Row' },
       commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.onClick } }]
    };
  },
    provide: {
    treegrid: [ Edit, CommandColumn ]
  },
    methods: {
    onClick: function(args) {
    let rowIndex = (closest(args.target, '.e-row')).rowIndex;
    let data = this.$refs.treegrid.ej2Instances.getCurrentViewRecords();
    alert(JSON.stringify(data[rowIndex]));
    }
  }
}
</script>