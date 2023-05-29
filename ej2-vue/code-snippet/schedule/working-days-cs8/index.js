
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week, Month } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView' :showWeekNumber='showWeekNumber' :weekRule='weekRule'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Month',
                showWeekNumber: true,
                weekRule: 'FirstFourDayWeek',
                eventSettings: { dataSource: scheduleData }
            }
        },
        provide: {
            schedule: [Day, Week, Month]
        }
    
});