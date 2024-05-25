<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate'
                :group='group' :resourceHeaderTemplate="'resourceHeaderTemplate'">
                <e-views>
                    <e-view option='Week'></e-view>
                    <e-view option='Month'></e-view>
                    <e-view option='TimelineWeek'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                    <e-view option='Agenda'></e-view>
                </e-views>
                <template v-slot:resourceHeaderTemplate="{ data }">
                    <div class='template-wrap'>
                        <div class="resource-details">
                            <div class="resource-name">{{ data.resourceData.text }}</div>
                            <div class="resource-designation">{{ data.resourceData.designation }}</div>
                        </div>
                    </div>
                </template>
                <e-resources>
                    <e-resource field='DoctorId' title='Doctor Name' name='Doctors' :dataSource='ownerDataSource'
                        textField='text' idField='id' colorField='color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { doctorData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Week, Month, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 3, 4);
const group = {
    resources: ['Doctors']
};
const ownerDataSource = [
    { text: 'Will Smith', id: 1, color: '#ea7a57', designation: 'Cardioligst' },
    { text: 'Alice', id: 2, color: '#7fa900', designation: 'Neurologist' },
    { text: 'Robson', id: 3, color: '#7fa900', designation: 'Orthopedic Surgeon' }
];
const eventSettings = { dataSource: doctorData };

provide('schedule', [Week, Month, Agenda, TimelineViews, TimelineMonth]);

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

.e-schedule .e-vertical-view .e-resource-cells {
    height: 62px;
}

.e-schedule .template-wrap {
    display: flex;
    text-align: left;
}

.e-schedule .template-wrap .resource-details {
    padding-left: 10px;
}

.e-schedule .template-wrap .resource-details .resource-name {
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
}

.e-schedule.e-device .template-wrap .resource-details .resource-name {
    font-size: inherit;
    font-weight: inherit;
}

.e-schedule.e-device .e-resource-tree-popup .e-fullrow {
    height: 50px;
}

.e-schedule.e-device .template-wrap .resource-details .resource-designation {
    display: none;
}
</style>
