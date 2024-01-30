
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import {SchedulePlugin, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings' :enablePersistence='enablePersistence'>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
                enablePersistence: true,
                eventSettings: { dataSource: scheduleData }
            }
        },
        provide: {
           schedule: [Day, Week, TimelineViews, Month, Agenda]
        }
    
});