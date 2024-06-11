<template>
    <div>
        <div id='app'>
            <div id='container'>
                <tr>
                    <td>
                        <div>
                            <ejs-button v-on:click='onSubmit'>Click to open Editor</ejs-button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-button v-on:click='onEventSubmit'>Click to open Event Editor</ejs-button>
                        </div>
                    </td>
                </tr>
                <br><br>
                <ejs-schedule ref='scheduleObj' width='100%' height='500px' :eventSettings='eventSettings'
                    :selectedDate='selectedDate'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const scheduleObj = ref(null);
const eventSettings = { dataSource: extend([], scheduleData, null, true) };
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [Day, Week, WorkWeek, Month]);

const onEventSubmit = function () {
    let schedule = scheduleObj.value.ej2Instances;
    let eventData = {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    };
    schedule.openEditor(eventData, 'Save');
};
const onSubmit = function () {
    let schedule = scheduleObj.value.ej2Instances;
    let cellData = {
        startTime: new Date(2018, 1, 15, 10, 0),
        endTime: new Date(2018, 1, 15, 11, 0),
    };
    schedule.openEditor(cellData, 'Add');
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
