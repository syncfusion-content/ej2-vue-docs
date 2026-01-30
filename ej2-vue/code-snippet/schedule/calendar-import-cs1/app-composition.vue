<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-uploader id='ics-import' :cssClass='cssClass' name="ics-import" :buttons="buttons"
                    :showFileList='showFileList' :multiple='multiple' :allowedExtensions='extensions'
                    :selected='onSelect' />
                <ejs-schedule ref="scheduleObj" height="520px" :selectedDate='selectedDate'
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
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport } from "@syncfusion/ej2-vue-schedule";
import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
import { scheduleData } from './datasource.js';

const scheduleObj = ref(null);
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2018, 1, 15);
const currentView = 'Week';
const cssClass = 'calendar-import';
const multiple = false;
const extensions = '.ics';
const buttons = {
    browse: 'Choose file'
};
const showFileList = false;

provide('schedule', [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport]);

const onSelect = function (args) {
    let schedule = scheduleObj.value.ej2Instances;
    schedule.importICalendar(args.event.target.files[0]);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-schedule/styles/tailwind3.css";

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
