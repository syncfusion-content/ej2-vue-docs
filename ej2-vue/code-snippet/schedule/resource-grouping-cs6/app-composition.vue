<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule width='100%' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :currentView='currentView' :group='group'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ConferenceId' title='Conference' name='Conferences'
                            :allowMultiple='allowMultiple' :dataSource='resourceDataSource' textField='Text'
                            idField='Id' colorField='Color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Week, Month, Agenda, TimelineViews, TimelineMonth, Resize } from '@syncfusion/ej2-vue-schedule';
import { resourceConferenceData } from './datasource.js';


const selectedDate = new Date(2018, 5, 2);
const currentView = 'Week';
const group = {
    allowGroupEdit: true,
    resources: ['Conferences']
};
const resourceDataSource = [
    { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
    { Text: 'Robert', Id: 2, Color: '#357cd2' },
    { Text: 'Laura', Id: 3, Color: '#7fa900' }
];
const allowMultiple = true;
const eventSettings = { dataSource: resourceConferenceData };

provide('schedule', [Week, Month, Agenda, TimelineViews, TimelineMonth, Resize]);

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
