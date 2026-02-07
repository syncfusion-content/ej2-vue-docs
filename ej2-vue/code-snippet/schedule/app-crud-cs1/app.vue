<template>
    <div>
        <div id='app'>
            <div id='container'>
                <tr>
                    <td>
                        <div>
                            <ejs-button v-on:click='onAdd'>Add</ejs-button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-button v-on:click='onSave'>Edit</ejs-button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-button v-on:click='onDelete'>Delete</ejs-button>
                        </div>
                    </td>
                </tr><br>
                <ejs-schedule ref='scheduleObj' width='100%' height='485px' :eventSettings='eventSettings'
                    :selectedDate='selectedDate'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            eventSettings: {
                dataSource: [{
                    Id: 3,
                    Subject: 'Testing',
                    StartTime: new Date(2018, 1, 11, 9, 0),
                    EndTime: new Date(2018, 1, 11, 10, 0),
                    IsAllDay: false
                }, {
                    Id: 4,
                    Subject: 'Vacation',
                    StartTime: new Date(2018, 1, 13, 9, 0),
                    EndTime: new Date(2018, 1, 13, 10, 0),
                    IsAllDay: false
                }]
            },
            selectedDate: new Date(2018, 1, 15)
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month]
    },
    methods: {
        onSave: function () {
            let scheduleObj = this.$refs.scheduleObj.ej2Instances;
            let eventData = {
                Id: 3,
                Subject: 'Testing-edited',
                StartTime: new Date(2018, 1, 11, 10, 0),
                EndTime: new Date(2018, 1, 11, 11, 0),
                IsAllDay: false
            };
            scheduleObj.saveEvent(eventData);
        },
        onAdd: function () {
            let scheduleObj = this.$refs.scheduleObj.ej2Instances;
            let Data = [{
                Id: 1,
                Subject: 'Conference',
                StartTime: new Date(2018, 1, 12, 9, 0),
                EndTime: new Date(2018, 1, 12, 10, 0),
                IsAllDay: false
            }, {
                Id: 2,
                Subject: 'Meeting',
                StartTime: new Date(2018, 1, 15, 10, 0),
                EndTime: new Date(2018, 1, 15, 11, 30),
                IsAllDay: false
            }];
            scheduleObj.addEvent(Data);
        },
        onDelete: function () {
            let scheduleObj = this.$refs.scheduleObj.ej2Instances;
            scheduleObj.deleteEvent(4);
        }
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css';
</style>
