
    import Vue from 'vue';
    import { fifaEventsData } from './datasource.js';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, Month } from '@syncfusion/ej2-vue-schedule';
    import { Timezone } from '@syncfusion/ej2-schedule';
    Vue.use(SchedulePlugin);
    let timezone = new Timezone();
    var data = extend([], fifaEventsData, null, true);
    for (var i = 0; i < data.length; i++) {
        data[i].StartTime = timezone.removeLocalOffset(data[i].StartTime);
        data[i].EndTime = timezone.removeLocalOffset(data[i].EndTime);
    }

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' :selectedDate='selectedDate' :timezone='timezone' :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                eventSettings: { dataSource: data },
                selectedDate: new Date(2018, 5, 17),
                timezone: 'UTC'
            }
        },
        provide: {
            schedule: [Day, Week, Month]
        }
    
});