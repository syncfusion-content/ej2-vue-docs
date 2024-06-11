<template>
<div id="app">
        <button v-on:click="Indenting()">Indent</button>
        <button v-on:click="Outdenting()">Outdent</button>
        <ejs-treegrid :dataSource='data' ref="treegrid" childMapping='subtasks' :treeColumnIndex='1' height='270px'>
        <e-columns>
                <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name'  width=180 ></e-column>
                <e-column field='priority' headerText='Priority' width=80 textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=80 textAlign='Right'></e-column>
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

  data() {
    return {
      data: sampleData
    };
  },
  methods: {
    Indenting() {
      this.$refs.treegrid.indent(this.$refs.treegrid.getCurrentViewRecords()[2]);
    },
    Outdenting() {
      this.$refs.treegrid.outdent(this.$refs.treegrid.getCurrentViewRecords()[2]);
    }
  },
    provide: {
    treegrid: [ RowDD ]
  }
}
</script>