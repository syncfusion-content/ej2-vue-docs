<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref="ScheduleObj" :cssClass="cssClass" height="550px" :selectedDate='selectedDate'
                :eventSettings='eventSettings' :currentView="currentView" :actionBegin="onActionBegin">
                <e-views>
                    <e-view option="Week"></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Week, Resize, DragAndDrop, ExcelExport } from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
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
            scheduleObj.exportToExcel();
        }
    }
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

.excel-export.e-schedule .e-schedule-toolbar .e-icon-schedule-excel-export::before {
    content: '\e242';
}

.excel-export.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today {
    display: none !important;
}
</style>
