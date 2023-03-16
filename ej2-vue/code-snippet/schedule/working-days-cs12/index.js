
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week, TimelineViews } from '@syncfusion/ej2-vue-schedule';
    import { Internationalization } from '@syncfusion/ej2-base';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref='scheduleObj' height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings' :created='onCreated'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='TimelineWorkWeek'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventSettings: { dataSource: scheduleData }
            }
        },
        provide: {
            schedule: [Day, Week, TimelineViews]
        },
        methods: {
            onCreated: function(){
                let intl = new Internationalization();
                this.$refs.scheduleObj.scrollTo(intl.formatDate(new Date(), { skeleton: 'Hm' }));
            }
        }
    
});