
import Vue from "vue";
import { GanttPlugin, Edit, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :weekWorkingTime="weekWorkingTime" :dataSource="data" :taskFields = "taskFields" :height = "height" :highlightWeekends='true' :splitterSettings= "splitterSettings" :timelineSettings="timelineSettings"></ejs-gantt>
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
            splitterSettings: {
                columnIndex: 1
                },
            weekWorkingTime: [{ dayOfWeek: 'Monday', timeRange: [{ from: 10, to: 18 }] },
            { dayOfWeek: 'Tuesday', timeRange: [{ from: 10, to: 18 }] }],
            timelineSettings:{
           timelineViewMode:'Day'
           }
           };
  },
  provide: {
      gantt: [ DayMarkers, Edit ]
  },

});