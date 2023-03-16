
    import Vue from 'vue';
    import { resourceData } from './datasource.js';
    import { SchedulePlugin, Week, Month, Agenda} from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate' :group='group'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple' :dataSource='ownerDataSource'
                        textField='text' idField='id' colorField='color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                width: '100%',
                height: '550px',
                selectedDate: new Date(2018, 3, 4),
                group: {
                    byDate: true,
                    resources: ['Owners']
                },
                allowMultiple: true,
                ownerDataSource: [
                   { text: 'Alice', id: 1, color: '#1aaa55' },
                   { text: 'Smith', id: 2, color: '#7fa900' }
                ],
                eventSettings: { dataSource: resourceData },
            }
        },
        provide: {
            schedule: [Week, Month, Agenda]
        }
    
});