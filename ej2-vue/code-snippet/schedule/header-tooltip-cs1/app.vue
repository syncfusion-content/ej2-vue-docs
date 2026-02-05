<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate'
                :group='group'>
                <e-views>
                    <e-view option='TimelineWeek'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='ownerDataSource'
                        :allowMultiple='allowMultiple' textField='OwnerText' idField='Id' groupIDField='OwnerGroupId'
                        colorField='OwnerColor'>
                    </e-resource>
                </e-resources>
                <template v-slot:headerTooltipTemplate="{ data }">
                    <div class='template-wrap'>
                        <div class="resource-text">Name:{{ data.resourceData.OwnerText }}</div>
                    </div>
                </template>
            </ejs-schedule>
        </div>
    </div>
</template>

<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, Week, Month, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { resourceData } from './datasource.js';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective,
        "e-resources": ResourcesDirective,
        "e-resource": ResourceDirective
    },
    data() {
        return {
            selectedDate: new Date(2018, 3, 4),
            group: {
                resources: ['Rooms', 'Owners'],
                headerTooltipTemplate: "headerTooltipTemplate",
            },
            allowMultiple: true,
            ownerDataSource: [
                { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
                { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
                { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
            ],
            eventSettings: { dataSource: resourceData },
        }
    },
    provide: {
        schedule: [TimelineViews, TimelineMonth]
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

.e-schedule .e-vertical-view .e-resource-cells {
    height: 45px;
}

.e-schedule .e-agenda-view .template-wrap .resource-text {
    text-align: center;
}

.e-schedule .template-wrap .resource-text {
    font-size: 15px;
    padding: 4px 4px 4px;
    height: 25px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
