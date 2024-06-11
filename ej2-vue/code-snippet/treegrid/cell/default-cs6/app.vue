<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='300px'>
        <e-columns>
        <e-column field='taskID' headerText='<span> Task ID </span>' :disableHtmlEncode='true' width=140 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='<span> Task Name </span>' :disableHtmlEncode='false' width=180 ></e-column>
        <e-column field='startDate' headerText='Start Date' width=80 format="yMd" textAlign='Right'></e-column>
        <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { htmlData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: htmlData,
    };
  }
}
</script>