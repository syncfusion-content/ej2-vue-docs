<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :currentView='currentView'
                :selectedDate='selectedDate' :group='group'>
                <e-views>
                    <e-view option='Week'></e-view>
                    <e-view option='Month'></e-view>
                    <e-view option='Agenda'></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='ProjectId' title='Choose Project' name='Projects'
                        :dataSource='projectResourceDataSource' textField='text' idField='id' colorField='color'>
                    </e-resource>
                    <e-resource field='CategoryId' title='Category' name='Categories'
                        :dataSource='categoryResourceDataSource' :allowMultiple='allowMultiple' textField='text'
                        idField='id' colorField='color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { resourceProjectData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Week, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const currentView = 'Week';
const selectedDate = new Date(2018, 3, 4);
const group = {
    byGroupID: false,
    resources: ['Projects', 'Categories']
};
const projectResourceDataSource = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    { text: 'PROJECT 3', id: 3, color: '#df5286' }
];
const categoryResourceDataSource = [
    { text: 'Development', id: 1, color: '#df5286' },
    { text: 'Testing', id: 2, color: '#7fa900' }
];
const eventSettings = { dataSource: resourceProjectData };
const allowMultiple = true;

provide('schedule', [Week, Month, Agenda]);

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
