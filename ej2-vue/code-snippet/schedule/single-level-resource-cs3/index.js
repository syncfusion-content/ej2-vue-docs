
import Vue from 'vue';
import { SchedulePlugin, Week, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule id='Schedule' width='100%' height='550px' :selectedDate='selectedDate' :group='group'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple'
                            :dataSource='ownerDataSource' textField='text' idField='id' colorField='color'
                            workDaysField='workDays'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

    data() {
        return {
            width: '100%',
            height: '550px',
            selectedDate: new Date(2018, 3, 4),
            group: {
                byDate: true,
                resources: ['Owners'],
                hideNonWorkingDays: true,
            },
            allowMultiple: true,
            ownerDataSource: [
                { text: 'Alice', id: 1, color: '#1aaa55', workDays: [1, 2, 3, 4] },
                { text: 'Smith', id: 2, color: '#7fa900', workDays: [2, 3, 5] }
            ],
        }
    },
    provide: {
        schedule: [Week, Month, Agenda]
    }

});