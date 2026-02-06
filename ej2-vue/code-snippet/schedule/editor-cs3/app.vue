<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :editorTemplate="'editorTemplate'" :popupOpen='onPopupOpen'
        :popupClose='onPopupClose'>
        <template v-slot:editorTemplate>
          <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
              <tr>
                <td class="e-textlabel">Summary</td>
                <td colspan="4"><input id="Subject" class="e-input" type="text" name="Subject" style="width: 100%" />
                </td>
              </tr>
              <tr>
                <td class="e-textlabel">Status</td>
                <td colspan="4"><input type="text" id="EventType" name="EventType" style="width: 100%" /></td>
              </tr>
              <tr>
                <td class="e-textlabel">From</td>
                <td colspan="4"><input id="StartTime" type="text" name="StartTime" /></td>
              </tr>
              <tr>
                <td class="e-textlabel">To</td>
                <td colspan="4"><input id="EndTime" type="text" name="EndTime" /></td>
              </tr>
              <tr>
                <td class="e-textlabel">Reason</td>
                <td colspan="4"><textarea id="Description" class="e-input" name="Description" rows="3" cols="50"
                    style="width: 100%; height: 60px !important; resize: vertical"></textarea></td>
              </tr>
            </tbody>
          </table>
        </template>
      </ejs-schedule>
    </div>
  </div>
</template>

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { eventData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: eventData
      },
      selectedDate: new Date(2018, 1, 15),
      showQuickInfo: false
    };
  },
  methods: {
    onPopupOpen: function (args) {
      if (args.type === 'Editor') {
        let subjectElement = args.element.querySelector('#Subject');
        if (subjectElement) {
          subjectElement.value = args.data.Subject || "";
        }
        let statusElement = args.element.querySelector('#EventType');
        if (!statusElement.classList.contains('e-dropdownlist')) {
          let dropDownListObject = new DropDownList({
            placeholder: 'Choose status',
            value: args.data.EventType,
            dataSource: ['New', 'Requested', 'Confirmed']
          });
          dropDownListObject.appendTo(statusElement);
          statusElement.setAttribute('name', 'EventType');
        }
        let startElement = args.element.querySelector('#StartTime');
        if (!startElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker(
            { value: new Date(args.data.StartTime) || new Date() },
            startElement
          );
        }
        let endElement = args.element.querySelector('#EndTime');
        if (!endElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker(
            { value: new Date(args.data.EndTime) || new Date() },
            endElement
          );
        }
        let descriptionElement = args.element.querySelector('#Description');
        if (descriptionElement) {
          descriptionElement.value = args.data.Description || "";
        }
      }
    },
    onPopupClose: function (args) {
      if (args.type === 'Editor' && !isNullOrUndefined(args.data)) {
        let subjectElement = args.element.querySelector('#Subject');
        if (subjectElement) {
          args.data.Subject = subjectElement.value;
        }
        let statusElement = args.element.querySelector('#EventType');
        if (statusElement) {
          args.data.EventType = statusElement.value;
        }
        let startElement = args.element.querySelector('#StartTime');
        if (startElement) {
          args.data.StartTime = startElement.value;
        }
        let endElement = args.element.querySelector('#EndTime');
        if (endElement) {
          args.data.EndTime = endElement.value;
        }
        let descriptionElement = args.element.querySelector('#Description');
        if (descriptionElement) {
          args.data.Description = descriptionElement.value;
        }
      }
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";

.custom-event-editor .e-textlabel {
  padding-right: 15px;
  text-align: right;
}

.custom-event-editor td {
  padding: 7px;
  padding-right: 16px;
}
</style>
