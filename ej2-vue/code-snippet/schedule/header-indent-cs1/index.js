
import Vue from 'vue';
import { SchedulePlugin, Week, Day, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { resourceData } from './datasource.js';

Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
      <ejs-schedule width='100%' height='550px' :headerIndentTemplate="'headerIndentTemplate'"
        :eventSettings='eventSettings' :selectedDate='selectedDate' :group='group'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='TimelineWeek'></e-view>
          <e-view option='TimelineMonth'></e-view>
        </e-views>
        <template v-slot:headerIndentTemplate="{ data }">
          <div class='e-resource-text'>
            <div class="text">Resources</div>
          </div>
        </template>
        <e-resources>
          <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple' :dataSource='ownerDataSource'
            textField='OwnerText' idField='Id' colorField='OwnerColor'>
          </e-resource>
        </e-resources>
      </ejs-schedule>
    </div>
  </div>
`,

        data () {
            return {
                width: '100%',
                height: '550px',
                currentView: 'Week',
                selectedDate: new Date(2018, 3, 1),
                group: {
                    resources: ['Owners']
                },
                allowMultiple: true,
                ownerDataSource: [
                    { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
                    { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
                    { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
                ],
                eventSettings: { dataSource: resourceData },
            }
        },
        provide: {
            schedule: [Day, Week, TimelineViews, TimelineMonth]
        }

});