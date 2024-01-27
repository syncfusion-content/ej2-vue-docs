

<template>
  <div>
        <div id='app'>
            <div id='container'>
                <ejs-uploader id='ics-import' :cssClass='cssClass' name="ics-import" :buttons="buttons"
                :showFileList='showFileList' :multiple='multiple' :allowedExtensions='extensions'
                :selected='onSelect'/>
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
<script>
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport } from "@syncfusion/ej2-vue-schedule";
    import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
    import { scheduleData } from './datasource.js';

    Vue.use(UploaderPlugin);
    Vue.use(SchedulePlugin);

    export default {
        data: function () {
            return {
                eventSettings: { dataSource: scheduleData },
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Week',
                cssClass:'calendar-import',
                multiple: false,
                extensions: '.ics',
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
            onSelect: function (args) {
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                scheduleObj.importICalendar(args.event.target.files[0]);
            }
        }
    }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-schedule/styles/material.css";

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


