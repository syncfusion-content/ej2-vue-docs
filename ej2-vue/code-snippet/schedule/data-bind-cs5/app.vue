<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' height='530px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                :readOnly='readOnly' :actionFailure='onActionFailure'>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { DataManager } from '@syncfusion/ej2-data';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const dataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
});

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent
    },
    data() {
        return {
            selectedDate: new Date(2017, 5, 11),
            readOnly: true,
            eventSettings: { dataSource: dataManager }
        };
    },
    methods: {
        onActionFailure: function () {
            let span = document.createElement('span');
            let scheduleObj = this.$refs.scheduleObj.ej2Instances;
            scheduleObj.element.parentNode.insertBefore(span, scheduleObj.element);
            span.style.color = '#FF0000'
            span.innerHTML = 'Server exception: 404 Not found';
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css";
</style>
