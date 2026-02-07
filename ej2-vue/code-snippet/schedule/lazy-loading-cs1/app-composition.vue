<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='ScheduleObj' width='100%' height='550px' :selectedDate='selectedDate' readonly='true'
                :eventSettings='eventSettings' :group='group'>
                <e-views>
                    <e-view option='TimelineMonth' :enableLazyLoading='enableLazyLoad' isSelected="true"></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='ResourceId' title='Resource' name='Resources' :dataSource='resourceData'
                        textField='Text' idField='Id' colorField='Color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { generateResourceData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const dataManager = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/VirtualEventData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

const selectedDate = new Date(2023, 3, 1);
const enableLazyLoad = true;
const group = {
    resources: ['Resources']
};
const resourceData = generateResourceData(1, 1000, 'Resource');
const eventSettings = { dataSource: dataManager };

provide('schedule', [TimelineMonth]);

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
