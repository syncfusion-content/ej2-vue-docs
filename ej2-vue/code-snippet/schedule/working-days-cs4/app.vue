<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :enablePersistence='enablePersistence'>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script>
import { scheduleData } from './datasource.js';
import { ScheduleComponent, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent
    },
    data() {
        return {
            selectedDate: new Date(2018, 1, 15),
            views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
            enablePersistence: true,
            eventSettings: { dataSource: scheduleData }
        }
    },
    provide: {
        schedule: [Day, Week, TimelineViews, Month, Agenda]
    }
}
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
