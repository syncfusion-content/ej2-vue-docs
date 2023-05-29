


<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :height="height"></ejs-gantt>
    </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Toolbar, PdfExport, Selection, PdfExportProperties } from "@syncfusion/ej2-vue-gantt";
import { PdfColor,PdfPaddings  } from '@syncfusion/ej2-pdf-export';
import {editingData  } from './data-source.js';
Vue.use(GanttPlugin);
export default {
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
            child: 'subtasks'
        },
        toolbar: ['PdfExport'],
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_pdfexport') {
                    let exportProperties = {
                      fontFamily: 1,
                      columnHeader: {
                         backgroundColor: new PdfColor(179, 219, 255)
                      },
                      taskbar: {
                         taskColor: new PdfColor(240, 128, 128),
                         taskBorderColor: new PdfColor(240, 128, 128),
                         progressColor: new PdfColor(205, 92, 92),
                      },
                      connectorLineColor: new PdfColor(128, 0, 0),
                      footer: {
                        backgroundColor: new PdfColor(205, 92, 92)
                      },
                      timeline: {
                        backgroundColor: new PdfColor(179, 219, 255),
                        padding: new PdfPaddings(5, 2, 0, 0),
                     },
                     label: {
                        fontColor: new PdfColor(128, 0, 0),
                    },
                    cell: {
                      backgroundColor: new PdfColor(240, 248, 255),
                      fontColor: new PdfColor(0, 0, 0),
                      borderColor:new PdfColor(179, 219, 255),
                    },
                };
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.pdfExport(exportProperties);
                }
            }
      };
  },
  provide: {
      gantt: [Toolbar, PdfExport]
  }
};
</script>



