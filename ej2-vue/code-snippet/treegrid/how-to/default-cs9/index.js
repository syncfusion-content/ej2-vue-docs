
import Vue from "vue";
import { TreeGridPlugin, ColumnMenu} from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='300px' :showColumnMenu='true' childMapping="subtasks" ref="treegrid">
        <e-columns>
          <e-column field="taskID" headerText="Task ID" width="70" textAlign="Right"></e-column>
          <e-column field="taskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="startDate" headerText="Start Date" format="yMd" width="90" textAlign="Right"></e-column>
          <e-column field="endDate" headerText="End Date" width="90" format="yMd" textAlign="Center"></e-column>
          <e-column field="duration" headerText="Duration" width="90" textAlign="Right"></e-column>
          <e-column field="progress" headerText="progress" width="90" textAlign="Right"></e-column>
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
    treegrid: [ColumnMenu ]
  }

});