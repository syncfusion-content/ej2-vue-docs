<template>
    <div>
        <div class='col-md-9 control-section'>
            <div class='content-wrapper'>
                <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script>
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            eventSettings: {
                dataSource: extend([], scheduleData, null, true),
                fields: {
                    subject: { title: 'Event Name', name: 'Subject', default: 'Add Name' },
                    location: { title: 'Event Location', name: 'Location', default: 'USA' },
                    description: { title: 'Summary', name: 'Description' },
                    startTime: { title: 'From', name: 'StartTime' },
                    endTime: { title: 'To', name: 'EndTime' }
                }
            },
            selectedDate: new Date(2018, 1, 15)
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css';
</style>
