<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :columns="columns" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryCellInfo="pdfQueryCellInfo"  :height="height"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, PdfExport, Selection, PdfQueryTimelineCellInfoEventArgs } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import {editingData  } from './data-source.js';

const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const columns = [
    { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText:  'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150'},
    { field: 'Duration',headerText: 'Duration', width: '150', visible: false },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
const toolbar = ['PdfExport'];
const toolbarClick = (args) => {
        if (args.item.id === 'GanttContainer_pdfexport') {
            var ganttChart = gantt.value.ej2Instances;
             ganttChart.pdfExport();
        }
    };
const pdfQueryCellInfo = (args) => {
if(args.column.field == 'Progress'){
    if(args.value < 50) {
        args.style = {backgroundColor: '#F08080'};
    } else {
        args.style = {backgroundColor: '#A569BD'};
    }
}
};
provide('gantt', [Toolbar, PdfExport]);
</script>