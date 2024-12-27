
import Vue from 'vue';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
Vue.use(SchedulePlugin);


new Vue({
    el: '#app',
    template: `
    <div id='app'>
        <div id='container'>
            <div class='content-wrapper'>
                <ejs-schedule id='Schedule' ref='scheduleObj' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :allowClipboard="true" :showQuickInfo="false"></ejs-schedule>
            </div>
        </div>
    </div>
`,

    data: function () {
        return {
            eventSettings: { dataSource: extend([], scheduleData, null, true) },
            selectedDate: new Date(2024, 1, 15),
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
});