<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :columns="columns" :splitterSettings="splitterSettings" :actionFailure='actionFailure'></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
};
const height = '450px';
const splitterSettings = {
    columnIndex: 3
};
const columns = [
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
const actionFailure = function(args) {
       let span = document.createElement('span');
       let gantt = document.getElementsByClassName("e-gantt")[0].ej2_instances[0];
       gantt.element.parentNode.insertBefore(span, gantt.element);
       span.style.color = '#FF0000';
       span.innerHTML = args.error[0];
};
</script>