


<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :splitterSettings="splitterSettings">
      <e-columns>
        <e-column field='TaskName' :headerTemplate='projectName' width=150></e-column>
        <e-column field='StartDate' :headerTemplate='dateTemplate' width=150></e-column>
        <e-column field='Duration' :headerTemplate='durationTemplate' width=150></e-column>
        <e-column field='Progress' :headerTemplate='projectName' width=150></e-column>
        <e-column field='Progress' :headerTemplate='progressTemplate' width=150></e-column>
      </e-columns>
      <template v-slot:projectName="{data}">
        <div>
          <img src="taskname.png" width="20" height="20" class="e-image" />Task Name
        </div>
      </template>
      <template v-slot:dateTemplate="{data}">
        <div>
          <img src="startdate.png" width="20" height="20" class="e-image" />Start Date
        </div>
      </template>
      <template v-slot:durationTemplate="{data}">
        <div>
          <img src="duration.png" width="20" height="20" class="e-image" />Duration
        </div>
      </template>
      <template v-slot:progressTemplate="{data}">
        <div>
          <img src="progress.png" width="20" height="20" class="e-image" /> Progress
        </div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
export default {
  data: function() {
      return{
         data: editingData,
      taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        },
        height:'450px',
        splitterSettings:{
            columnIndex:4
            },
            columns: [
            { field: 'TaskName', headerTemplate:  '#projectName', width: '150' },
            { field: 'StartDate', headerTemplate: '#dateTemplate', width: '150' },
            { field: 'Duration',headerTemplate: '#durationTemplate', headerText: 'Duration', width: '150'},
            { field: 'Progress',headerTemplate: '#progressTemplate',  headerText: 'Progress', width: '150' },
        ],
      };
  },
};
</script>



