

<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref="ScheduleObj" :cssClass="cssClass" height="550px" :selectedDate='selectedDate' :eventSettings='eventSettings'
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
                let exportValues = {
                    customData: [{
                        Id: 1,
                        Subject: 'Explosion of Betelgeuse Star',
                        Location: 'Space Centre USA',
                        StartTime: new Date(2019, 0, 6, 9, 30),
                        EndTime: new Date(2019, 0, 6, 11, 0),
                        CategoryColor: '#1aaa55'
                    }, {
                        Id: 2,
                        Subject: 'Thule Air Crash Report',
                        Location: 'Newyork City',
                        StartTime: new Date(2019, 0, 7, 12, 0),
                        EndTime: new Date(2019, 0, 7, 14, 0),
                        CategoryColor: '#357cd2'
                    }]
                };
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


