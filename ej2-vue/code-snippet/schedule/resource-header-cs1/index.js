
    import Vue from 'vue';
    import { doctorData} from './datasource.js';
    import { SchedulePlugin, Week, Month, Agenda, TimelineViews, TimelineMonth} from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);

    var resourceHeaderTemplateVue = Vue.component('headerTemplate', {
        template: `<div class='template-wrap'><div class="resource-details"><div class="resource-name">{{data.resourceData.text}}</div><div class="resource-designation">{{data.resourceData.designation}}</div></div></div>`,
        data() {
            return {
                data: {}
            };
        }
    });

    
new Vue({
	el: '#app',
	template: `
        <div id='app'>
            <div id='container'>
                <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate' :group='group' :resourceHeaderTemplate='resourceHeaderTemplate'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='DoctorId' title='Doctor Name' name='Doctors' :dataSource='ownerDataSource'
                        textField='text' idField='id' colorField='color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 3, 4),
                group: {
                    resources: ['Doctors']
                },
                ownerDataSource: [
                    { text: 'Will Smith', id: 1, color: '#ea7a57', designation: 'Cardioligst' },
                    { text: 'Alice', id: 2, color: '#7fa900', designation: 'Neurologist' },
                    { text: 'Robson', id: 3, color: '#7fa900', designation: 'Orthopedic Surgeon'  }
                ],
                resourceHeaderTemplate: function(e){
                    return {
                        template: resourceHeaderTemplateVue
                    };
                },
                eventSettings: { dataSource: doctorData },
            }
        },
        provide: {
            schedule: [Week, Month, Agenda, TimelineViews, TimelineMonth]
        }
    
});