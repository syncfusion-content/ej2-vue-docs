<template>
<div id="app">
<ejs-button id='copy' @click='copy'>Copy</ejs-button>
        <ejs-button id='copyHeader' @click='copyHeader'>CopyHeader</ejs-button>
        <ejs-treegrid ref=treegrid :dataSource='treeGridData' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' height='230px' :selectionSettings='selectionOptions'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Page, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data ()  {
    return {
      treeGridData: sampleData,
      pageSettings: { pageSize: 10 },
      selectionOptions: { type: 'Multiple'}
    };
  },
  provide: {
      treegrid: [ Page ]
    },
    methods: {
    copy: function() {
        this.$refs.treegrid.copy();
    },
    copyHeader: function() {
        this.$refs.treegrid.copy(true);
    }
  }
}
</script>