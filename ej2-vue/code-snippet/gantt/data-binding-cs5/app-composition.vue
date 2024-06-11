<template>
     <div>
        <ejs-button id="databind" cssClass="e-info" v-on:click.native="databind">Bind Data</ejs-button>
        <br>
        <br>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :projectStartDate="projectStartDate" :projectEndDate= "projectEndDate"></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { Ajax } from '@syncfusion/ej2-base';
const height = '450px';
const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    progress: 'Progress',
    duration: 'Duration',
    dependency: 'Predecessor',
    child: 'SubTasks'
};
const projectStartDate = new Date('02/24/2019');
const projectEndDate = new Date('07/20/2019');
const databind = function(e){
    let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/GanttData","GET");
    this.showSpinner();
    ajax.send();
    ajax.onSuccess = function (data) {
    this.hideSpinner();
    this.dataSource = (JSON.parse(data)).Items;
    this.refresh();
};
};
</script>