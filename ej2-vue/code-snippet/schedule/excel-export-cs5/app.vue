

<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" height="550px" :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :currentView="currentView" :actionBegin="onActionBegin">
                    <e-views>
                        <e-view option="Week"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { SchedulePlugin, Week, View, Resize, DragAndDrop, ExcelExport
} from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);
export default {
        data: function () {
            return {
                cssClass: 'excel-export',
                eventSettings: { dataSource: scheduleData },
                selectedDate: new Date(2019, 0, 10),
                currentView: 'Week'
            }
        },
        provide: {
            schedule: [Week, Resize, DragAndDrop, ExcelExport]
        },
        methods: {
            onActionBegin: function (args) {
                if (args.requestType === 'toolbarItemRendering') {
                    let exportItem = {
                        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                        text: 'Excel Export', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
                    };
                    args.items.push(exportItem);
                }
            },

            onExportClick: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                let customFields = [
                    { name: 'Subject', text: 'Summary' },
                    { name: 'StartTime', text: 'First Date' },
                    { name: 'EndTime', text: 'Last Date' },
                    { name: 'Location', text: 'Place' },
                    { name: 'OwnerId', text: 'Owners' }
                ];
                let exportValues = { fieldsInfo: customFields };
                scheduleObj.exportToExcel(exportValues);
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

    .excel-export.e-schedule .e-schedule-toolbar .e-icon-schedule-excel-export::before {
        content: '\e242';
    }

    .excel-export.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today{
        display: none !important;
    }

</style>


