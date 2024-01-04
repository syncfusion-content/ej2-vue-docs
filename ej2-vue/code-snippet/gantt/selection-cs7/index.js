
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-button id="selectRow" cssClass="e-info" v-on:click.native="select">Select Row</ejs-button>
        <ejs-button id="selectRows" cssClass="e-info" v-on:click.native="Multiselect">Select Multiple Rows</ejs-button>
        <br>
        <br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" ></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ],
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            selectionSettings: {
                mode: 'Row',
                type: 'Multiple'
            }
      };
  },
  provide: {
      gantt: [ Selection ]
  },
  methods: {
      select: function(e){
          var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
          ganttObj.selectionModule.selectRow(2); // passing the record index to select the row
      },
      Multiselect: function(e){
        var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
        ganttObj.selectionModule.selectRows([1, 2, 3]); // passing the record index to select the rows
     },
  }

});