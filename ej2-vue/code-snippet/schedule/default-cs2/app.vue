<template>
    <div id="app">
        <div id="container">
            <ejs-schedule width="100%" height="550px" :eventSettings='eventSettings' :selectedDate='selectedDate'
                :actionBegin='onActionBegin'>
                <e-views>
                    <e-view option="Day"></e-view>
                    <e-view option="Week"></e-view>
                    <e-view option="WorkWeek"></e-view>
                    <e-view option="Month"></e-view>
                    <e-view option="Agenda"></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>

<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';

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
                dataSource: scheduleData
            },
            selectedDate: new Date(2018, 1, 15),
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    },
    methods: {
        onActionBegin: function (args) {
            let weekEnds = [0, 6];
            if (args.requestType == 'eventCreate' && weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0) {
                args.cancel = true;
            }
        }
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3';
</style>
