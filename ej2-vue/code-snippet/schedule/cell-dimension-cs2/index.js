
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Week, WorkWeek, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :actionBegin='onActionBegin'>
                <e-views>
                    <e-view option='Week'></e-view>
                    <e-view option='WorkWeek'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                eventSettings: { dataSource: scheduleData },
                selectedDate: new Date(2018, 1, 15)
            }
        },
        methods: {
            onActionBegin: function(args){
                if (args.requestType === 'eventCreate' && args.data.length > 0) {
                    let eventData = args.data[0];
                    let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                    let eventField = scheduleObj.eventFields;
                    let startDate = eventData[eventField.startTime];
                    let endDate = eventData[eventField.endTime];
                    args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
                }
            }
        },
        provide: {
            schedule: [Week, WorkWeek]
        }
    
});