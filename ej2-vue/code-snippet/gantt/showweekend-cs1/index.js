
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :columns="columns" :timelineSettings="timelineSettings" ></ejs-gantt>
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
        timelineSettings: {
                showTooltip: true
            },
            columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ]
        };
  },

});