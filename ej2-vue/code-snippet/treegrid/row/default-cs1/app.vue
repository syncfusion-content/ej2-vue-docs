<template>
<div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' childMapping='subtasks' height='315px' :rowDataBound='rowDataBound'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right'  width='90'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right'  format='yMd' type='date' width='90'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width='80'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data () {
    return {
      data: sampleData,
    };
  },
  methods:{
     rowDataBound: function(args) {
         if (args.data['duration'] == 0 ) {
        args.row.style.background= '#336c12';
    } else if (args.data['duration'] < 3) {
        args.row.style.background= '#7b2b1d';
    }
    }
}
}
</script>