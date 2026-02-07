<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate'
                    :currentView='currentView' :group='group'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ConferenceId' title='Conference' name='Conferences'
                            :allowMultiple='allowMultiple' :dataSource='ownerDataSource' textField='text' idField='id'
                            colorField='color' workDaysField='workDays'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { doctorData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';


const selectedDate = new Date(2018, 3, 4);
const currentView = 'WorkWeek';
const group = {
    resources: ['Conferences']
};
const allowMultiple = true;
const ownerDataSource = [
    { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5] },
    { text: 'Alice', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5] },
    { text: 'Robson', id: 3, color: '#7fa900', workDays: [2, 6] }
];
const eventSettings = { dataSource: doctorData };

provide('schedule', [Week, WorkWeek, Month]);

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
