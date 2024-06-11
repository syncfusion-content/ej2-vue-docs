<template>
<div id="app">
        <ejs-button @click="show"> Show </ejs-button>
        <ejs-button @click="hide"> Hide </ejs-button>
        <ejs-treegrid ref=treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' :height='270'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText='Start Date' width=90 format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: sampleData
    };
  },
   methods:{
       show: function() {
        this.$refs.treegrid.showColumns(['Task ID', 'Duration']); // show by HeaderText
    },
    hide: function() {
        this.$refs.treegrid.hideColumns(['Task ID', 'Duration']); // hide by HeaderText
    }
  }

}
</script>