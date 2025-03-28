
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Print } from "@syncfusion/ej2-vue-schedule";
    import { scheduleData } from './datasource.js';

    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
  <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref="ScheduleObj" height="520px" :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :actionBegin="onActionBegin">
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data: function () {
            return {
                eventSettings: { dataSource: scheduleData },
                selectedDate: new Date(2018, 1, 15),
                cssClass:'schedule-print',
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Print]
        },
        methods: {
            onActionBegin: function (args) {
                if (args.requestType === 'toolbarItemRendering') {
                    let exportItem = {
                        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                        text: 'Print', cssClass: 'e-print', click: this.onPrintIconClick.bind(this)
                    };
                    args.items.push(exportItem);
                }
            },

            onPrintIconClick: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                let printModel = {
                    agendaDaysCount: 14,
                    cssClass: 'e-print-schedule',
                    currentView: scheduleObj.currentView,
                    dateFormat: 'dd-MMM-yyyy',
                    enableRtl: false,
                    endHour: '18:00',
                    firstDayOfWeek: 1,
                    firstMonthOfYear: 0,
                    group: {},
                    height: 'auto',
                    locale: scheduleObj.locale,
                    maxDate: scheduleObj.selectedDate,
                    minDate: scheduleObj.getCurrentViewDates()[0],
                    readonly: true,
                    resources: [],
                    rowAutoHeight: false,
                    selectedDate: new Date(),
                    showHeaderBar: false,
                    showTimeIndicator: false,
                    showWeekNumber: false,
                    showWeekend: false,
                    startHour: '06:00',
                    timeFormat: 'HH',
                    timeScale: { enable: true },
                    width: 'auto',
                    workDays: [1, 2, 3, 4, 5],
                    workHours: { highlight: true, start: '10:00', end: '20:00' }
                };
                scheduleObj.print(printModel);
            }
        }
    
});