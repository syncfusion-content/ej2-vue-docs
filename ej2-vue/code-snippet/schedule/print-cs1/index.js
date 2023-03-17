
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
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="520px" :selectedDate='selectedDate'
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
                scheduleObj.print();
            }
        }
    
});