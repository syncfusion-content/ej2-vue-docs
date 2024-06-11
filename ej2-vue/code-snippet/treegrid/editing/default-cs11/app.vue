<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
        <e-column field='taskID' :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='Task Name' width=180></e-column>
        <e-column field='startDate' headerText='Start Date' editType= 'datepickeredit' type='date' format='yMd' textAlign='Right' width=170></e-column>
        <e-column field='priority' headerText='Priority' width=110 defaultValue='Normal'></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Edit, Toolbar, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

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
      toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell', showDeleteConfirmDialog: true },
    };
  },
    provide: {
    treegrid: [ Edit, Toolbar ]
  }
}
</script>