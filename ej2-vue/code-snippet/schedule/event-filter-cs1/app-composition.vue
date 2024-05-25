<template>
    <div id='app'>
        <div id='container'>
            <table id='property' title="Filter events">
                <tbody>
                    <tr>
                        <td>
                            <ejs-checkbox ref='confirmedObj' label='Confirmed' :checked='true'
                                :change='onChange'></ejs-checkbox>
                        </td>
                        <td>
                            <ejs-checkbox ref='requestedObj' label='Requested' :checked='true'
                                :change='onChange'></ejs-checkbox>
                        </td>
                        <td>
                            <ejs-checkbox ref='newObj' label='New' :checked='true' :change='onChange'></ejs-checkbox>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate'
                :eventSettings='eventSettings' :eventRendered='onEventRendered'></ejs-schedule>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { Query, Predicate } from '@syncfusion/ej2-data';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons';
import { scheduleData } from './datasource.js';

const scheduleObj = ref(null);
const confirmedObj = ref(null);
const requestedObj = ref(null);
const newObj = ref(null);
const height = '525px';
const width = '100%';
const eventSettings = {
    dataSource: scheduleData
};
const selectedDate = new Date(2018, 1, 15);

const onEventRendered = function (args) {
    switch (args.data.EventType) {
        case 'Requested':
            args.element.style.backgroundColor = '#F57F17';
            break;
        case 'Confirmed':
            args.element.style.backgroundColor = '#7fa900';
            break;
        case 'New':
            args.element.style.backgroundColor = '#8e24aa';
            break;
    }
};
const onChange = function (args) {
    let predicate;
    let checkBoxes = [confirmedObj.value.ej2Instances, requestedObj.value.ej2Instances, newObj.value.ej2Instances];
    checkBoxes.forEach((checkBoxObj) => {
        if (checkBoxObj.checked) {
            if (predicate) {
                predicate = predicate.or('EventType', 'equal', checkBoxObj.label);
            } else {
                predicate = new Predicate('EventType', 'equal', checkBoxObj.label);
            }
        }
    });
    scheduleObj.value.ej2Instances.eventSettings.query = new Query().where(predicate);
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

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

#property td {
    padding: 0 5px;
}
</style>
