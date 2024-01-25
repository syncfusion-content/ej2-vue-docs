
import Vue from 'vue';
import {SchedulePlugin, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views'
        :selectedDate='selectedDate' :eventSettings='eventSettings'
        :quickInfoTemplates='quickInfoTemplates'>
        <template v-slot:headerTemplate="{ data }">
          <div>
            <div v-if= "data.elementType === 'cell' ">
              <div class="e-cell-header">
                <div class="e-header-icon-wrapper">
                  <button class="e-close" title="Close"></button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="e-event-header">
                <div class="e-header-icon-wrapper">
                  <button class="e-close" title="CLOSE"></button>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:contentTemplate="{ data }">
          <div>
            <div v-if= "data.elementType === 'cell' ">
              <div class="e-cell-content e-template">
                <form class="e-schedule-form">
                  <div><input class="subject e-field" type="text" name="Subject" placeholder="Title"></div>
                  <div><input class="location e-field" type="text" name="Location" placeholder="Location"></div>
                </form>
              </div>
            </div>
            <div v-else><div class="e-event-content e-template">
              <div class="e-subject-wrap">
                <div><div v-if="data.Subject !== undefined">
                  <div class="subject">{{data.Subject}}</div>
                </div>
              </div>
            <div>
            <div v-if="data.Location !== undefined">
              <div class="location">{{data.Location}}</div>
            </div>
            <div>
            <div v-if="data.Description !== undefined">
              <div class="description">{{data.Description}}</div>
            </div>
          </div>
        </template>
        <template v-slot:footerTemplate="{ data }">
          <div>
            <div v-if= "data.elementType === 'cell' ">
              <div class="e-cell-footer">
                <button class="e-event-details" title="Extra Details">Extra Details</button>
                <button class="e-event-create" title="Add">Add</button>
              </div>
            </div>
            <div v-else><div class="e-event-footer">
              <button class="e-event-edit" title="Edit">Edit</button>
              <button class="e-event-delete" title="Delete">Delete</button>
            </div>
          </div>
        </template>
      </ejs-schedule>
    </div>
  </div>
`,

  data() {
    return {
      height: '550px',
      width: '100%',
      eventSettings: {
        dataSource: scheduleData
      },
      selectedDate: new Date(2018, 1, 15),
      views: ['Day', 'Week', 'WorkWeek'],
      quickInfoTemplates: {
        header: "headerTemplate",
        content: "contentTemplate",
        footer: "footerTemplate"
      }
    };
  },
  provide: {
    schedule: [Day, Week, WorkWeek]
  }

});