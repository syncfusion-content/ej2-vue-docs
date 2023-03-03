
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
    import { scheduleData } from './datasource.js';
    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div id="container">
            <ejs-schedule width="100%" height="550px" :eventSettings='eventSettings' :selectedDate='selectedDate'
            :actionBegin='onActionBegin'>
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
`,

        data () {
            return {
                eventSettings: {
                    dataSource: scheduleData
                },
                selectedDate: new Date(2018, 1, 15),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        },
        methods: {
            onActionBegin: function(args) {
                let weekEnds = [0, 6];
                if(args.requestType == 'eventCreate' && weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0) {
                    args.cancel = true;
                }
            }
        }
    
});