
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ICalendarExport, ICalendarImport } from "@syncfusion/ej2-vue-schedule";
    import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
    import { scheduleData } from './datasource.js';

    Vue.use(UploaderPlugin);
    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
  <div>
        <div id='app'>
            <div id='container'>
                <ejs-uploader id='ics-import' :cssClass='cssClass' name="ics-import" :buttons="buttons"
                :showFileList='showFileList' :multiple='multiple' :allowedExtensions='extensions'
                :selected='onSelect'/>
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
                extensions: '.ics',
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
            onSelect: function (args) {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                scheduleObj.importICalendar(args.event.target.files[0]);
            }
        }
    
});