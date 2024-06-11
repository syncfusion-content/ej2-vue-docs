<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='300px' gridLines='Both'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right' ></e-column>
                <e-column field='taskName' headerText='Task Name' width=90 clipMode='Clip'></e-column>
                <e-column field='assignee.firstName' headerText='Assignee' clipMode='EllipsisWithTooltip' width=40 textAlign='Right'></e-column>
                 <e-column field='priority' headerText='Priority' clipMode='Ellipsis' width=40 textAlign='Right'></e-column>
                 <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { complexData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: complexData,
    };
  }
}
</script>