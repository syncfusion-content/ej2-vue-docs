
    import Vue from 'vue';
    import { SchedulePlugin, Week, Month, Agenda, TimelineViews, TimelineMonth, Resize} from '@syncfusion/ej2-vue-schedule';
    import { resourceConferenceData } from './datasource.js';

    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule id='Schedule' width='100%' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView' :group='group'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ConferenceId' title='Conference' name='Conferences' :allowMultiple='allowMultiple' :dataSource='resourceDataSource'
                        textField='Text' idField='Id' colorField='Color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 5, 2),
                currentView: 'Week',
                group: {
                    allowGroupEdit: true,
                    resources: ['Conferences']
                },
                resourceDataSource: [
                    { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
                    { Text: 'Robert', Id: 2, Color: '#357cd2' },
                    { Text: 'Laura', Id: 3, Color: '#7fa900' }
                ],
                allowMultiple: true,
                eventSettings: { dataSource: resourceConferenceData }
            }
        },
        provide: {
            schedule: [Week, Month, Agenda, TimelineViews, TimelineMonth, Resize]
        }
    
});