<template>
<div id="app">
        <ejs-treegrid :dataSource='data' height='265' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbar'>
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

import { TreeGridComponent, Toolbar, Filter, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
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
      toolbar: ['Print', 'Search']
    };
  },
  provide: {
      treegrid: [ Toolbar, Filter ]
    }
}
</script>