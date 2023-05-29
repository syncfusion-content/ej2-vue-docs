
    import Vue from "vue";
    import { loadCldr, setCulture, L10n } from '@syncfusion/ej2-base';
    import {
        SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth,
        Resize, DragAndDrop, MonthAgenda
    } from "@syncfusion/ej2-vue-schedule";
    import { Calendar, Islamic } from '@syncfusion/ej2-calendars';
    import { scheduleData } from './datasource.js';
    import * as localeText from './locale.json';
    import * as numberingSystems from './numberingSystems.json';
    import * as ca_gregorian from './ca-gregorian.json';
    import * as numbers from './numbers.json';
    import * as timeZoneNames from './timeZoneNames.json';
    import * as ca_islamic from './ca-islamic.json';

    Calendar.Inject(Islamic)

    Vue.use(SchedulePlugin);
    L10n.load(localeText);
    loadCldr(numberingSystems, ca_gregorian, numbers, timeZoneNames, ca_islamic);
    setCulture('ar');

    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule height="550px" width="100%" :enableRtl='enableRtl' calendarMode='Islamic'>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventSettings: { dataSource: scheduleData },
                enableRtl: true,
                views: [
                    { option: 'Day' },
                    { option: 'TimelineDay' },
                    { option: 'Week' },
                    { option: 'TimelineWeek' },
                    { option: 'Month' },
                    { option: 'TimelineMonth' },
                    { option: 'Agenda' },
                    { option: 'MonthAgenda' }
                ],
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth,
    Resize, DragAndDrop, MonthAgenda]
        }
    
});