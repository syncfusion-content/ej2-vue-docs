<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :editorTemplate="'editorTemplate'" :popupOpen='onPopupOpen'>
        <template v-slot:editorTemplate="{ data }">
          <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
              <tr>
                <td class="e-textlabel">Summary</td>
                <td colspan="4">
                  <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                </td>
              </tr>
              <tr>
                <td class="e-textlabel">From</td>
                <td colspan="4">
                  <ejs-datetimepicker id="StartTime" class="e-field" name="StartTime"></ejs-datetimepicker>
                </td>
              </tr>
              <tr>
                <td class="e-textlabel">To</td>
                <td colspan="4">
                  <ejs-datetimepicker id="EndTime" class="e-field" name="EndTime" ></ejs-datetimepicker>
                </td>
              </tr>
              <tr>
                <td class="e-textlabel">Repeat</td>
                <td colspan="4">
                  <ejs-recurrenceeditor ref="recurrenceObj" id="RecurrenceEditor" :value="data.RecurrenceRule"></ejs-recurrenceeditor>
                </td>
              </tr>
              <tr>
                <td class="e-textlabel">Reason</td>
                <td colspan="4">
                  <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </ejs-schedule>
    </div>
  </div>
</template>

<script setup>
import { provide, ref  } from "vue";
import { ScheduleComponent as EjsSchedule, RecurrenceEditorComponent as EjsRecurrenceeditor, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month, RecurrenceEditor } from '@syncfusion/ej2-vue-schedule';
import { DateTimePickerComponent as EjsDatetimepicker } from "@syncfusion/ej2-vue-calendars";
import { eventData } from './datasource.js';

const scheduleObj = ref(null);
const recurrenceObj = ref(null);
const height = '550px';
const width = '100%';
const views = ['Day', 'Week', 'WorkWeek', 'Month'];
const eventSettings = {
  dataSource: eventData
};
const selectedDate = new Date(2018, 1, 15);
const onPopupOpen = function (args) {
  if (args.type === 'Editor') {
    let schedule = scheduleObj.value.ej2Instances;
    let recurrObject = recurrenceObj.value.ej2Instances;
    schedule.eventWindow.recurrenceEditor = recurrObject;
    document.getElementById('RecurrenceEditor').style.display = (schedule.currentAction == 'EditOccurrence') ? 'none' : 'block';
  }
}
provide('schedule', [Day, Week, WorkWeek, Month]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";

.custom-event-editor .e-textlabel {
  padding-right: 15px;
}

.custom-event-editor td {
  padding: 7px;
}
</style>
