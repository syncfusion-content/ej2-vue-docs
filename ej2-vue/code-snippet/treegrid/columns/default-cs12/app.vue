<template>
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' :allowReordering='true' :allowSelection='false' height='315px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText='Start Date' width=90 format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right' :lockColumn='true' :customAttributes="customAttributes"></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Reorder, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
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
      customAttributes : {class: 'customcss'}
    };
  },
  provide: {
      treegrid: [ Reorder ]
    },
}
</script>
<style>
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-treegrid/styles/material.css";
 .e-grid .e-rowcell.customcss{
  background-color: #ecedee;
}
.e-grid .e-headercell.customcss{
  background-color: #ecedee;
}
</style>