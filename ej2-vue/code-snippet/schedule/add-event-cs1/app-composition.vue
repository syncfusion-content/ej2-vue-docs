<template>
    <div id="app">
        <div id="container">
            <tr>
                <td>
                    <div>
                        <ejs-button id="btn1" v-on:click="onAddClick">Add</ejs-button>
                    </div>
                </td>
            </tr>
            <ejs-schedule ref='scheduleObj' width="100%" height="520px" :eventSettings='eventSettings'
                :selectedDate='selectedDate'>
                <e-views>
                    <e-view option="Day"></e-view>
                    <e-view option="Week"></e-view>
                    <e-view option="WorkWeek"></e-view>
                    <e-view option="Month"></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month } from "@syncfusion/ej2-vue-schedule";

const scheduleObj = ref(null);
const scheduleData = [{
    Id: 1,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false
}, {
    Id: 2,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 13, 9, 0),
    EndTime: new Date(2018, 1, 13, 10, 0),
    IsAllDay: false
}];

const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [Day, Week, WorkWeek, Month]);
const onAddClick = function () {
    let Data = [{
        Id: 3,
        Subject: 'Conference',
        StartTime: new Date(2018, 1, 12, 9, 0),
        EndTime: new Date(2018, 1, 12, 10, 0),
        IsAllDay: true
    }, {
        Id: 4,
        Subject: 'Meeting',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 11, 30),
        IsAllDay: false
    }];
    scheduleObj.value.addEvent(Data);
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css';
</style>
