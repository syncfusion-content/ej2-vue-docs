
    import Vue from 'vue';
    import { extend } from '@syncfusion/ej2-base';
    import { scheduleData } from './datasource.js';
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    Vue.use(ButtonPlugin);
    import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <tr>
                    <td>
                        <div>
                            <ejs-button id='btn1' v-on:click.native='onChangeWorkHours'>Change the Work Hours</ejs-button>
                        </div>
                    </td>
                </tr>
                <ejs-schedule ref='scheduleObj' width='100%' height='500px' :eventSettings='eventSettings' :selectedDate='selectedDate' :workHours='workHours'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true)  },
                workHours: {
                    highlight: true,
                    start: '09:00',
                    end: '11:00'
                },
                selectedDate: new Date(2018, 1, 15)
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        },
        methods: {
            onChangeWorkHours: function () {
                let dates = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
                this.$refs.scheduleObj.setWorkHours(dates, '11:00','20:00');
            }
        }
    
});