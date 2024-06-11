<template>
<div id="app">
        <ejs-treegrid id='TreeGrid' ref='treeGrid' :dataSource="data" :allowRowDragAndDrop='true' height='315' :treeColumnIndex='1'
         childMapping='subtasks' :rowDrop="rowDrop" >
            <e-columns>
                    <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, RowDD, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
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
    provide: {
    treegrid: [RowDD]
  },
  methods: {
    rowDrop: function(args) {
              if (args.dropPosition == 'middleSegment') {
                    args.cancel = true;
                    this.$refs.treeGrid.reorderRows([args.fromIndex], args.dropIndex, 'above');
                }
           }
  },
}
</script>