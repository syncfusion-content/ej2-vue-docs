<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :height = "height" :taskFields = "taskFields" :labelSettings="labelSettings" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
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
            rightLabel:'Progress Value: ${taskData.Progress}',
            taskLabel: '${Progress}%'
        },
        projectStartDate: new Date('03/28/2019'),
        projectEndDate: new Date('04/14/2019'),
      };
  },
};
</script>