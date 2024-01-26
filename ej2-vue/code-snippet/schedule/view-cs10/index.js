
    import Vue from 'vue';
    import { SchedulePlugin, MonthAgenda } from '@syncfusion/ej2-vue-schedule';
    import { scheduleData } from './datasource.js';

    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='MonthAgenda' :showWeekend='showWeekend' :workDays='workDays'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventSettings: { dataSource: scheduleData},
                workDays: [1,2,3],
                showWeekend: false
            }
        },
        provide: {
            schedule: [MonthAgenda]
        }
    
});