
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
    import { scheduleData } from './datasource.js';
    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div id="container">
            <ejs-schedule width="100%" height="550px" :eventSettings='eventSettings' :selectedDate='selectedDate'>
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
                    dataSource: scheduleData,
                    fields: {
                        subject: { name: 'Subject', validation: { required: true } },
                        location: {
                            name: 'Location', validation: {
                                required: true,
                                regex: ["^[a-zA-Z0-9- ]*$", 'Special character(s) not allowed in this field']
                            }
                        }
                    }
                },
                selectedDate: new Date(2018, 1, 15),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    
});