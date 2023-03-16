
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <p class="e-text"> The parent container can be resizable by dragging the bottom-right corner.</p>
      <div id='container' class='e-resizable'>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' height='100%' width= '100%' :treeColumnIndex='1' >
            <e-columns>
              <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
              <e-column field='taskName' headerText='Task Name' width='180'></e-column>
              <e-column field='startDate' headerText='Start Date' width='120' format="yMd" textAlign='Right'></e-column>
              <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
</div>
`,

  data ()  {
    return {
      data: sampleData
    };
  }

});