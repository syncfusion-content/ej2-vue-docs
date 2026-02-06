<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref="ScheduleObj" width='100%' height='650px' :selectedDate="selectedDate"
                :eventSettings="eventSettings" currentView="Month" :enableAdaptiveUI="enableAdaptiveUI" :group="group">
                <e-views>
                    <e-view option="Day"></e-view>
                    <e-view option="Week"></e-view>
                    <e-view option="Month"></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='ProjectId' title='Choose Project' name='Projects'
                        :dataSource='projectResourceDataSource' textField='text' idField='id' colorField='color'>
                    </e-resource>
                    <e-resource field='TaskId' title='Employee' name='Employees' :dataSource='employeeDataSource'
                        :allowMultiple='allowMultiple' textField='text' idField='id' groupIDField='groupId'
                        colorField='color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { resourceData, timelineResourceData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Day, Week, Month, DragAndDrop, Resize } from '@syncfusion/ej2-vue-schedule';

const eventSettings = {
    dataSource: generateData()
};
const selectedDate = new Date(2018, 3, 4);
const enableAdaptiveUI = true;
const allowMultiple = true;
const group = {
    resources: ['Projects', 'Employees']
};
const projectResourceDataSource = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    { text: 'PROJECT 3', id: 3, color: '#df5286' }
];
const employeeDataSource = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
    { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
    { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
    { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
];

provide('schedule', [Day, Week, Month, DragAndDrop, Resize]);

const generateData = function () {
    var collections = [];
    var dataCollections = [resourceData, timelineResourceData];
    for (var i = 0; i < dataCollections.length; i++) {
        collections = collections.concat(dataCollections[i]);
    }
    return collections;
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
