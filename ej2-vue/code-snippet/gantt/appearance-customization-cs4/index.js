
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :height = "height" :taskFields = "taskFields" :labelSettings="labelSettings" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: editingData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            labelSettings: {
            leftLabel: 'Task ID: ${taskData.TaskID}',
            rightLabel:'Progress Value: ${taskData.Progress}'
            taskLabel: '${Progress}%'
        },
        projectStartDate: new Date('03/28/2019'),
        projectEndDate: new Date('04/14/2019'),
      };
  },

});