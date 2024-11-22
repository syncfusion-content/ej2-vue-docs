<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :selectedDate='selectedDate'
                :eventSettings='eventSettings' :actionBegin='onActionBegin'>
                <e-views>
                    <e-view option='Week'></e-view>
                    <e-view option='WorkWeek'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { scheduleData } from './datasource.js';
import { ScheduleComponent, ViewsDirective, ViewDirective, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            eventSettings: { dataSource: scheduleData },
            selectedDate: new Date(2018, 1, 15)
        }
    },
    methods: {
        onActionBegin: function (args) {
            if (args.requestType === 'eventCreate' && args.data.length > 0) {
                let eventData = args.data[0];
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                let eventField = scheduleObj.eventFields;
                let startDate = eventData[eventField.startTime];
                let endDate = eventData[eventField.endTime];
                args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
            }
        }
    },
    provide: {
        schedule: [Week, WorkWeek]
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
