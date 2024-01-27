

<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate' :currentView='currentView' :group='group'>
                    <e-views>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field= 'RoomId' title= 'Room' name= 'Rooms' :dataSource='roomDataSource' textField='RoomText' idField='Id' colorField='RoomColor'>
                        </e-resource>
                        <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple' :dataSource='ownerDataSource'
                        textField='OwnerText' idField='Id' groupIDField= 'OwnerGroupId' colorField='OwnerColor'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { resourceData } from './datasource.js';
    import { SchedulePlugin, TimelineViews, TimelineMonth, Agenda } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    export default {
        data () {
            return {
                width: '100%',
                height: '550px',
                currentView: 'TimelineWeek',
                selectedDate: new Date(2018, 3, 4),
                group: {
                    resources: ['Rooms', 'Owners']
                },
                roomDataSource: [
                    { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
                    { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
                ],
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
            schedule: [TimelineViews, TimelineMonth, Agenda]
        }
    }
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>



