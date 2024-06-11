<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' idMapping='TaskID' parentIdMapping='parentID' :treeColumnIndex='1' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
                <e-column field='TaskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width=180></e-column>
                <e-column field='StartDate' headerText='Start Date' editType= 'datepickeredit' type= 'date' format= 'yMd' textAlign='Right' width=170></e-column>
                <e-column field='Duration' headerText='Duration' width=80  textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Edit, Toolbar, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: projectData,
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    };
  },
    provide: {
    treegrid: [ Edit, Toolbar ]
  }
}
</script>
<style>
 @import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>