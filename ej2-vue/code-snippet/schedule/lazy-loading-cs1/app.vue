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
<script>
import { generateResourceData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const dataManager = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/VirtualEventData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective,
        "e-resources": ResourcesDirective,
        "e-resource": ResourceDirective
    },
    data: function () {
        return {
            selectedDate: new Date(2023, 3, 1),
            enableLazyLoad: true,
            group: {
                resources: ['Resources']
            },
            resourceData: generateResourceData(1, 1000, 'Resource'),
            eventSettings: { dataSource: dataManager }
        }
    },
    provide: {
        schedule: [TimelineMonth]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";
</style>
