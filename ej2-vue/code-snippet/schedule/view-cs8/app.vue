<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='Year' showWeekNumber=true readonly=true></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { scheduleData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, Year } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            selectedDate: new Date(2018, 1, 15),
            eventSettings: { dataSource: scheduleData }
        }
    },
    provide: {
        schedule: [Year]
    }
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
