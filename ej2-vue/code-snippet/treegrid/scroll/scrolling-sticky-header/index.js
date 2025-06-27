
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :height='315' :width='400'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data ()  {
    return {
      data: sampleData
    };
  }

});