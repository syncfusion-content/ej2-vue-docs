
    import Vue from 'vue';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <tr>
                    <td>
                        <div>
                            <ejs-button v-on:click.native='onAdd'>Add</ejs-button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-button v-on:click.native='onSave'>Edit</ejs-button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-button v-on:click.native='onDelete'>Delete</ejs-button>
                        </div>
                    </td>
                </tr><br>
                <ejs-schedule ref='scheduleObj' width='100%' height='485px' :eventSettings='eventSettings' :selectedDate='selectedDate'>
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
`,

        data () {
            return {
                eventSettings: {
                    dataSource: [{
                        Id: 3,
                        Subject: 'Testing',
                        StartTime: new Date(2018, 1, 11, 9, 0),
                        EndTime: new Date(2018, 1, 11, 10, 0),
                        IsAllDay: false,
                        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
                    },{
                        Id: 4,
                        Subject: 'Vacation',
                        StartTime: new Date(2018, 1, 12, 11, 0),
                        EndTime: new Date(2018, 1, 12, 12, 0),
                        IsAllDay: false,
                        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2',
                    }]
                },
                selectedDate: new Date(2018, 1, 15),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        },
        methods: {
            onSave: function () {
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                let eventData = {
                    Id: 3,
                    Subject: 'Testing-edited',
                    StartTime: new Date(2018, 1, 11, 10, 0),
                    EndTime: new Date(2018, 1, 11, 11, 0),
                    IsAllDay: false,
                    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
                };
                scheduleObj.saveEvent(eventData,'EditOccurrence');
            },
            onAdd: function () {
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                let Data = [{
                    Id: 1,
                    Subject: 'Conference',
                    StartTime: new Date(2018, 1, 15, 9, 0),
                    EndTime: new Date(2018, 1, 15, 10, 0),
                    IsAllDay: false,
                    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2',
                }];
                scheduleObj.addEvent(Data);
            },
            onDelete: function () {
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                let scheduleData = [{
                    Id: 4,
                    Subject: 'Vacation',
                    RecurrenceID: 4,
                    StartTime: new Date(2018, 1, 12, 11, 0),
                    EndTime: new Date(2018, 1, 12, 12, 0),
                    IsAllDay: false,
                    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2',
                }];
                scheduleObj.deleteEvent(scheduleData,'DeleteSeries');
            },
        }
    
});