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
<script>

import { resourceData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, Month, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { RadioButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        "ejs-radiobutton": RadioButtonComponent,
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
                resources: ['Rooms', 'Owners']
            },
            roomDataSource: [
                { RoomText: 'ROOM 1', Id: 1, RoomGroupId: 1, RoomColor: '#cb6bb2' },
                { RoomText: 'ROOM 2', Id: 2, RoomGroupId: 2, RoomColor: '#56ca85' }
            ],
            allowMultiple: true,
            ownerDataSource: [
                { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
                { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
                { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
            ],
            eventSettings: { dataSource: resourceData, resourceColorField: 'Rooms' }
        }
    },
    provide: {
        schedule: [Month, Week, Agenda, TimelineViews, TimelineMonth]
    },
    methods: {
        onChange(args) {
            this.$refs.scheduleObj.ej2Instances.eventSettings.resourceColorField = args.value;
        }
    }
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
