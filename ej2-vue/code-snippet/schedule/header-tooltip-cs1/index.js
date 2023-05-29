
    import Vue from 'vue';
    import { SchedulePlugin, Week, Month, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
    import { resourceData } from './datasource.js';

    Vue.use(SchedulePlugin);

    var headerTooltipTemplateVue = Vue.component('headerTooltipTemplate', {
        template: `<div class='template-wrap'><div class="resource-text">Name:{{data.resourceData.OwnerText}}</div></div>`,
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
                <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate' :group='group'>
                    <e-views>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='ownerDataSource' :allowMultiple='allowMultiple'
                        textField='OwnerText' idField='Id' groupIDField='OwnerGroupId' colorField='OwnerColor'>
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
                  resources: ['Rooms', 'Owners'],
                  headerTooltipTemplate: function(e){
                      return {
                          template: headerTooltipTemplateVue
                      };
                  }
                },
                allowMultiple: true,
                ownerDataSource: [
                    { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
                    { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
                    { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }  
                ],
                eventSettings: { dataSource: resourceData },
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth]
        }
    
});