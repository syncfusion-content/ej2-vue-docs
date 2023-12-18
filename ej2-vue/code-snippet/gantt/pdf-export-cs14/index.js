
import Vue from "vue";
import { GanttPlugin, Toolbar, PdfExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import {editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :height="height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
        data:editingData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            indicators: 'Indicators'
        },
        toolbar: ['PdfExport'],
        toolbarClick: (args) => {
               if (args.item.id === 'GanttContainer_pdfexport') {
                    var ganttChart = document.getElementById('app').ej2_instances[0];
                    ganttChart.pdfExport();
                }
            },
      };
  },
  provide: {
      gantt: [Toolbar, PdfExport]
  }

});