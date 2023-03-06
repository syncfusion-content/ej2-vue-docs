
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, WorkWeek } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='WorkWeek' :workDays='workDays'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventSettings: { dataSource: scheduleData },
                workDays: [2,3,5]
            }
        },
        provide: {
            schedule: [WorkWeek]
        }
    
});