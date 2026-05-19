
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";

Vue.use(TreeGridPlugin);

const dataSource = [
    {
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
        ],
    },
    {
        TaskID: 4, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 5, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3, },
            { TaskID: 6, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2, },
            { TaskID: 7, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    }
];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' childMapping='subtasks'>
          <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=150></e-column>
                <e-column field='TaskName' headerText='Task Name' width=170></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='EndDate' headerText='End Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=100></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
`,

  data() {
    return {
      data: dataSource,
    };
  }

});