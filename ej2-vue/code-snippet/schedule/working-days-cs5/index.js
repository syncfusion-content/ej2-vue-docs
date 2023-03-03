
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Week, WorkWeek, Month, TimelineViews } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView' :workDays='workDays'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineWorkWeek'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                currentView: 'WorkWeek',
                workDays: [1, 3, 5],
                eventSettings: { dataSource: scheduleData }
            }
        },
        provide: {
            schedule: [Week, WorkWeek, Month, TimelineViews]
        }
    
});