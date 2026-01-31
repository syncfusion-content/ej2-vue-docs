<template>
    <div>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :eventSettings='eventSettings'
                :selectedDate='selectedDate' :currentView='currentView' :group='group' :renderCell='onRenderCell'>
                <e-views>
                    <e-view option='TimelineDay'></e-view>
                    <e-view option='TimelineWeek'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='RoomId' title='Room' name='Rooms' :dataSource='roomDataSource'
                        textField='RoomText' idField='Id' groupIDField='RoomGroupId' colorField='RoomColor'>
                    </e-resource>
                    <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple'
                        :dataSource='ownerDataSource' textField='OwnerText' idField='Id' groupIDField='OwnerGroupId'
                        colorField='OwnerColor'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { resourceData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 3, 4);
const currentView = 'TimelineWeek';
const group = {
    resources: ['Rooms', 'Owners']
};
const roomDataSource = [
    { RoomText: 'ROOM 1', Id: 1, RoomGroupId: 1, RoomColor: '#cb6bb2' },
    { RoomText: 'ROOM 2', Id: 2, RoomGroupId: 2, RoomColor: '#56ca85' }
];
const allowMultiple = true;
const ownerDataSource = [
    { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
];
const eventSettings = { dataSource: resourceData }

provide('schedule', [TimelineViews, TimelineMonth]);

const onRenderCell = function (args) {
    if (args.elementType == 'resourceGroupCells' && args.element.className.indexOf('e-work-hours') > 0) {
        args.element.style.background = "#FAFAE3";
    }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
