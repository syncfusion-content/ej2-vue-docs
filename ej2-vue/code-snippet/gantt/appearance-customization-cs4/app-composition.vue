<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :height="height" :taskFields="taskFields"
            :labelSettings="labelSettings" :projectStartDate="projectStartDate"
            :projectEndDate="projectEndDate"></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
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
const labelSettings = {
    leftLabel: 'Task ID: ${taskData.TaskID}',
    rightLabel: 'Progress Value: ${taskData.Progress}',
    taskLabel: '${Progress}%'
};
const projectStartDate = new Date('03/28/2019');
const projectEndDate = new Date('04/14/2019');
</script>