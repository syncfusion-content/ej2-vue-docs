<template>
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' :allowFiltering="true" :allowSorting="true" :height='270'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 :allowSorting="false" textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText='Start Date' width=90 :allowFiltering="false" format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Sort , Filter, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
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
      data: sampleData
    };
  },
  provide: {
      treegrid: [Sort, Filter]
  }
}
</script>