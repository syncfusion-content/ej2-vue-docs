<template>
    <div id="app">
        <div id="container">
            <ejs-schedule ref='scheduleObj' width="100%" height="550px" :eventSettings='eventSettings'
                :selectedDate='selectedDate' :cellClick='onCellClick' :eventClick='onEventClick'
                :showQuickInfo='showQuickInfo'>
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
import { schedulerData } from './datasource.js';

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
                dataSource: schedulerData
            },
            selectedDate: new Date(2021, 7, 15),
            showQuickInfo: false,
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    },
    methods: {
        onCellClick: function (args) {
            this.$refs.scheduleObj.openEditor(args, 'Add');
        },
        onEventClick: function (args) {
            if (!args.event.RecurrenceRule) {
                this.$refs.scheduleObj.openEditor(args.event, 'Save');
            }
            else {
                this.$refs.scheduleObj.quickPopup.openRecurrenceAlert();
            }
        }
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
