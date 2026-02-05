<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-button id='ics-export' v-on:click="onClick">Export</ejs-button>
                <ejs-schedule ref='scheduleObj' height="520px" :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :currentView='currentView'>
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
    </div>
</template>
<script>
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport } from "@syncfusion/ej2-vue-schedule";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { scheduleData } from './datasource.js';

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data: function () {
        return {
            eventSettings: { dataSource: scheduleData },
            selectedDate: new Date(2018, 1, 15),
            currentView: 'Week',
            cssClass: 'calendar-import',
            multiple: false,
            allowedExtensions: '.ics',
            buttons: {
                browse: 'Choose file',
            },
            showFileList: false,
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport]
    },
    methods: {
        onClick: function () {
            let scheduleObj = this.$refs.scheduleObj.ej2Instances;
            scheduleObj.exportToICalendar('ScheduleEvents');
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-schedule/styles/tailwind3";

.calendar-import.e-upload {
    border: 0;
    padding-left: 0 !important;
}

.calendar-import.e-upload .e-file-select-wrap {
    padding: 0
}

.calendar-import.e-upload .e-file-select-wrap .e-file-drop {
    display: none;
}
</style>
