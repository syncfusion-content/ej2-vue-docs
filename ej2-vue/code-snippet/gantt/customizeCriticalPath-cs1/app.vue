


<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :queryTaskbarInfo="queryTaskbarInfo" :holidays = "holidays" :enableCriticalPath="true" :editSettings="editSettings"></ejs-gantt>
    </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, CriticalPath,Edit,Toolbar } from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
Vue.use(GanttPlugin);
export default {
  data: function() {
      return{
        data: projectNewData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
            },
        toolbar: ['CriticalPath'],
        queryTaskbarInfo: function(args) {
            if ((args.data.isCritical || args.data.slack === '0 day') && !args.data.hasChildRecords) {
                args.taskbarBgColor = 'rgb(242, 210, 189)';
                args.progressBarBgColor = 'rgb(201, 169, 166)';
            }
        }
      };
  },
  provide: {
      gantt: [CriticalPath, Edit, Toolbar]
  }
};
</script>



