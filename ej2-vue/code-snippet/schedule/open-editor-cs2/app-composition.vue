<template>
    <div>
        <div id='app'>
            <div id='container'>
                <tr>
                    <td>
                        <div>
                            <ejs-button id='btn1' v-on:click='onChangeWorkHours'>Change the Work Hours</ejs-button>
                        </div>
                    </td>
                </tr>
                <ejs-schedule ref='scheduleObj' width='100%' height='500px' :eventSettings='eventSettings'
                    :selectedDate='selectedDate' :workHours='workHours'>
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
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';

const scheduleObj = ref(null);
const eventSettings = { dataSource: extend([], scheduleData, null, true) };
const workHours = {
    highlight: true,
    start: '09:00',
    end: '11:00'
};
const selectedDate = new Date(2018, 1, 15)

provide('schedule', [Day, Week, WorkWeek, Month]);

const onChangeWorkHours = function () {
    let dates = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
    scheduleObj.value.setWorkHours(dates, '11:00', '20:00');
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3';
</style>
