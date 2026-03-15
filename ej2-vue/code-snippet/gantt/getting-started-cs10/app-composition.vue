<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :columns="columns" :toolbar="toolbar" :allowFiltering="true" :timelineSettings="timelineSettings"
            :splitterSettings="splitterSettings" :labelSettings="labelSettings" :projectStartDate="projectStartDate"
            :projectEndDate="projectEndDate"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Filter, Toolbar } from "@syncfusion/ej2-vue-gantt";
const data = [
    { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

    { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50, resources: [1], ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2', Progress: 50, resources: [2, 3, 5], ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 50, ParentID: 1 },

    { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '4', Progress: 50, resources: [4], ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '6', Progress: 50, resources: [4, 8], ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '7', resources: [12, 5], ParentID: 5 }
];
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    parentID: 'ParentID'
};
const columns = [
    { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'EndDate', headerText: 'End Date' },
    { field: 'Predecessor', headerText: 'Predecessor' }
];
const toolbar = ['Search'];
const timelineSettings = {
    timelineUnitSize: 60,
    topTier: {
        format: 'MMM dd, yyyy',
        unit: 'Day',
    },
    bottomTier: {
        unit: 'Hour',
        format: 'h.mm a'
    },
};
const splitterSettings = {
    columnIndex: 3
};
const labelSettings = {
    rightLabel: 'TaskName',
};
const projectStartDate = new Date('04/02/2019');
const projectEndDate = new Date('04/21/2019');

provide('gantt', [Filter, Toolbar]);
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-vue-gantt/styles/tailwind3.css";
</style>