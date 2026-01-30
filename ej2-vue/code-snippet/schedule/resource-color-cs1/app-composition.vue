<template>
    <div>
        <div id='container' class='col-lg-12'>
            <div class='content-wrapper'>
                <div class='col-lg-12 property-section'>
                    <table id='property' title='Event Trace'>
                        <tbody>
                            <tr>
                                <td>
                                    <ejs-radiobutton label="Rooms" name="default" value="Rooms" :checked='true'
                                        :change='onChange'></ejs-radiobutton>
                                </td>
                                <td>
                                    <ejs-radiobutton label='Owners' name="default" value="Owners" :checked='false'
                                        :change='onChange'></ejs-radiobutton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <ejs-schedule ref='scheduleObj' id='Schedule' width='100%' height='500px'
                        :eventSettings='eventSettings' :selectedDate='selectedDate' :group='group'>
                        <e-views>
                            <e-view option='Week'></e-view>
                            <e-view option='Month'></e-view>
                            <e-view option='TimelineWeek'></e-view>
                            <e-view option='TimelineMonth'></e-view>
                            <e-view option='Agenda'></e-view>
                        </e-views>
                        <e-resources>
                            <e-resource field='RoomId' title='Room' name='Rooms' :dataSource='roomDataSource'
                                textField='RoomText' idField='Id' groupIDField='RoomGroupId' colorField='RoomColor'>
                            </e-resource>
                            <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple'
                                :dataSource='ownerDataSource' textField='OwnerText' idField='Id'
                                groupIDField='OwnerGroupId' colorField='OwnerColor'>
                            </e-resource>
                        </e-resources>
                    </ejs-schedule>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { resourceData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Month, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { RadioButtonComponent as EjsRadiobutton } from '@syncfusion/ej2-vue-buttons';

const scheduleObj = ref(null);
const selectedDate = new Date(2018, 3, 4);
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
const eventSettings = { dataSource: resourceData, resourceColorField: 'Rooms' };

provide('schedule', [Month, Week, Agenda, TimelineViews, TimelineMonth]);

const onChange = function (args) {
    scheduleObj.value.ej2Instances.eventSettings.resourceColorField = args.value;
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
