<template>
    <div>
        <div id='app'>
            <div>
                <ejs-timepicker width='100' :value='date' format='HH:mm' :change='onChange'>
                </ejs-timepicker>
            </div>
            <div id='container'>
                <ejs-schedule ref='ScheduleObj' height='510px' width='100%' :selectedDate='selectedDate'
                    :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
import { TimePickerComponent as EjsTimepicker } from '@syncfusion/ej2-vue-calendars';

const ScheduleObj = ref(null);
const selectedDate = new Date(2018, 1, 15);
const eventSettings = { dataSource: scheduleData };
const date = new Date(2000, 0, 1, 9);

provide('schedule', [Day, Week, WorkWeek]);

const onChange = function (args) {
    ScheduleObj.value.ej2Instances.scrollTo(args.text);
}

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3";
@import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";
</style>