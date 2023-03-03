
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='Day' interval=2 displayName='2 Days' startHour='09:30'
                    endHour='18:00' timeScale='timeScale'></e-view>
                    <e-view option='Week' displayName='2 Weeks' interval=2 :showWeekend='showWeekend' isSelected= true></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventSettings: { dataSource: scheduleData },
                timeScale: {enable: true, slotCount: 5},
                showWeekend: false
            }
        },
        provide: {
            schedule: [Day, Week]
        }
    
});