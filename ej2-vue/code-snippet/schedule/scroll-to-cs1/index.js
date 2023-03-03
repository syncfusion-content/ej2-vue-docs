
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
    import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

    Vue.use(SchedulePlugin);
    Vue.use(TimePickerPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div>
                <ejs-timepicker width='100' :value='date' format='HH:mm' :change='onChange'>
                </ejs-timepicker>
            </div>
            <div id='container'>
                <ejs-schedule ref='ScheduleObj' height='510px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventSettings: { dataSource: scheduleData },
                date: new Date(2000, 0, 1, 9)
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek]
        },
        methods: {
            onChange: function(args){
                this.$refs.ScheduleObj.ej2Instances.scrollTo(args.text);
            }
        }
    
});