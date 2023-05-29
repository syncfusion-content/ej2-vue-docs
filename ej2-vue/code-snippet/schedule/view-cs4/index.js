
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView'>
                <e-views>
                    <e-view option='Day' startHour='09:30' endHour='18:00' :timeScale='timeScale'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventSettings: { dataSource: scheduleData },
                currentView: 'Day',
                timeScale: {enable: true, slotCount: 5}
            }
        },
        provide: {
            schedule: [Day]
        }
    
});