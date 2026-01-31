<template>
    <div id='app'>
        <div id='container'>
            <div class='content-wrapper'>
                <ejs-schedule id='Schedule' ref='scheduleObj' height='550px' :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :allowClipboard="true" :showQuickInfo="false"></ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script>
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
    },
    data: function () {
        return {
            eventSettings: { dataSource: extend([], scheduleData, null, true) },
            selectedDate: new Date(2024, 1, 15),
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
