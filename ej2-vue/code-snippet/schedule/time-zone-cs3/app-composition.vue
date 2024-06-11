<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' :selectedDate='selectedDate' :timezone='timezone'
                    :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { fifaEventsData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, Month } from '@syncfusion/ej2-vue-schedule';
import { Timezone } from '@syncfusion/ej2-schedule';

let timezoneInstance = new Timezone();
let data = extend([], fifaEventsData, null, true);
for (var i = 0; i < data.length; i++) {
    data[i].StartTime = timezoneInstance.removeLocalOffset(data[i].StartTime);
    data[i].EndTime = timezoneInstance.removeLocalOffset(data[i].EndTime);
}

const eventSettings = { dataSource: data };
const selectedDate = new Date(2018, 5, 17);
const timezone = 'UTC';

provide('schedule', [Day, Week, Month]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
