
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport } from "@syncfusion/ej2-vue-schedule";
    import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
    import { scheduleData } from './datasource.js';

    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
  <div>
        <div id='app'>
            <div id='container'>
                <ejs-button id='ics-export' v-on:click.native="onClick">Export</ejs-button>
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="520px" :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :currentView='currentView'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="Agenda"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data: function () {
            return {
                eventSettings: { dataSource: scheduleData },
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Week',
                cssClass:'calendar-import',
                multiple: false,
                allowedExtensions: '.ics',
                buttons: {
                    browse: 'Choose file',
                },
                showFileList: false,
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport]
        },
        methods: {
            onClick: function () {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                scheduleObj.exportToICalendar('ScheduleEvents');
            }
        }
    
});