<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate'
                :dateRangeTemplate="'dateRangeTemplate'">
                <template v-slot:dateRangeTemplate="{ data }">
                    <div class="date-text">{{ getDateRange(data.startDate) }}-{{ getDateRange(data.endDate) }}</div>
                </template>
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='Agenda'></e-view>
                    <e-view option='TimelineWorkWeek'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

var instance = new Internationalization();

const selectedDate = new Date(2018, 1, 15)

provide('schedule', [Day, Week, Agenda, TimelineViews, TimelineMonth]);

const getDateRange = function (value) {
    return instance.formatDate(value, { skeleton: 'Ed' });
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
