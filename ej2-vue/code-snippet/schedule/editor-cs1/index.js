
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { eventData } from './datasource.js';

Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :editorTemplate="'editorTemplate'" :popupOpen='onPopupOpen'>
          <template v-slot:editorTemplate>
            <table class="custom-event-editor" width="100%" cellpadding="5">
              <tbody>
                <tr>
                  <td class="e-textlabel">Summary</td>
                    <td colspan="4">
                      <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                    </td>
                </tr>
                <tr>
                  <td class="e-textlabel">Status</td>
                    <td colspan="4"><input type="text" id="EventType" name="EventType" class="e-field" style="width: 100%" />
                  </td>
                </tr>
                <tr>
                  <td class="e-textlabel">From</td>
                    <td colspan="4"><input id="StartTime" class="e-field" type="text" name="StartTime" />
                  </td>
                </tr>
                <tr>
                  <td class="e-textlabel">To</td>
                    <td colspan="4"><input id="EndTime" class="e-field" type="text" name="EndTime" />
                  </td>
                </tr>
                <tr>
                  <td class="e-textlabel">Reason</td><td colspan="4">
                    <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
      </ejs-schedule>
    </div>
  </div>
`,

  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: eventData
      },
      selectedDate: new Date(2018, 1, 15),
      showQuickInfo: false,
    };
  },
  methods: {
    onPopupOpen: function(args) {
      if (args.type === 'Editor') {
        let statusElement = args.element.querySelector('#EventType');
        if (!statusElement.classList.contains('e-dropdownlist')) {
          let dropDownListObject = new DropDownList({
            placeholder: 'Choose status',
            value: statusElement.value,
            dataSource: ['New', 'Requested', 'Confirmed']
          });
          dropDownListObject.appendTo(statusElement);
          statusElement.setAttribute('name', 'EventType');
        }
        let startElement = args.element.querySelector('#StartTime');
        if (!startElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker(
            { value: new Date(startElement.value) || new Date() },
            startElement
          );
        }
        let endElement = args.element.querySelector('#EndTime');
        if (!endElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker(
            { value: new Date(endElement.value) || new Date() },
            endElement
          );
        }
      }
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  }

});