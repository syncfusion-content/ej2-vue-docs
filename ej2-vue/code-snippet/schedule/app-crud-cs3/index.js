
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
                            <ejs-button cssClass='e-info' v-on:click.native='onRefreshLayout'>Refresh Layout</ejs-button>
                        </div>
                    </td>
                </tr><br>
                <ejs-schedule id='Schedule' width='100%' height='485px' :eventSettings='eventSettings' :selectedDate='selectedDate'>
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
                    dataSource:  [{
                        Id: 1,
                        Subject: 'Testing',
                        StartTime: new Date(2021, 10, 16, 10, 0),
                        EndTime: new Date(2021, 10, 16, 12, 0),
                        IsAllDay: false
                    }, {
                        Id: 2,
                        Subject: 'Vacation',
                        StartTime: new Date(2021, 10, 18, 10, 0),
                        EndTime: new Date(2021, 10, 18, 12, 0),
                        IsAllDay: false
                    }]
                },
                selectedDate: new Date(2021, 10, 15)
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        },
        methods: {
            onRefreshLayout: function () {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                scheduleObj.refreshLayout();
            }
        }
    
});