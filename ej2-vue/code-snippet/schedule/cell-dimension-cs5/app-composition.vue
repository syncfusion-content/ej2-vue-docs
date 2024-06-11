<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :cellHeaderTemplate="'cellHeaderTemplate'"
                cssClass='schedule-cell-header-template'>
                <template v-slot:cellHeaderTemplate="{ data }">
                    <div v-html=getDateHeaderText(data.date)></div>
                </template>
                <e-views>
                    <e-view option='Month'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Month } from '@syncfusion/ej2-vue-schedule';

const instance = new Internationalization();

provide('schedule', [Month]);
const getDateHeaderText = function (date) {
    return instance.formatDate(date, { skeleton: "Ed" });
}
</script>
