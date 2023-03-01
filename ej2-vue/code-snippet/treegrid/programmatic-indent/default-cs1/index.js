
import Vue from "vue";
import { TreeGridPlugin, RowDD } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
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
`,

  data() {
    return {
      data: sampleData
    };
  },
  methods: {
    Indenting() {
      this.$refs.treegrid.indent(this.$refs.treegrid.getCurrentViewRecords()[2]);
    }
    Outdenting() {
      this.$refs.treegrid.outdent(this.$refs.treegrid.getCurrentViewRecords()[2]);
    }
  },
    provide: {
    treegrid: [ RowDD ]
  }

});