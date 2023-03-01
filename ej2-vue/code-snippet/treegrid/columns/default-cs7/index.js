
import Vue from "vue";
import { TreeGridPlugin, Resize } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' :allowResizing='true' height='315px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name'minWidth= 170 width=180 maxWidth=250></e-column>
                <e-column field='duration' headerText='Duration' minWidth= 50 width=80 maxWidth=150 textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress'  width=80 textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: sampleData,
    };
  },
   provide: {
      treegrid: [ Resize ]
    },

});