<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :editorTemplate="'editorTemplate'" :group='group'>
        <e-resources>
          <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='ownerDataSource' textField='text'
            idField='id' colorField='color'>
          </e-resource>
        </e-resources>
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
                <td class="e-textlabel">Owner</td>
                <td colspan="4">
                  <ejs-multiselect  id='OwnerId' name="OwnerId" class="e-field" placeholder= 'Choose owner' :dataSource='ownerDataSource' :fields='fields'></ejs-multiselect>
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
<script>
import { ScheduleComponent, ResourcesDirective, ResourceDirective, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { DateTimePickerComponent } from '@syncfusion/ej2-vue-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-vue-dropdowns';
import { eventData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
    "e-resources": ResourcesDirective,
    "e-resource": ResourceDirective,
    "ejs-datetimepicker": DateTimePickerComponent,
    "ejs-multiselect" : MultiSelectComponent
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
      group: { resources: ['Owners'] },
      ownerDataSource: [
        { text: 'Nancy', id: 1, color: '#1aaa55' },
        { text: 'Smith', id: 2, color: '#7fa900' },
        { text: 'Paul', id: 3, color: '#357cd2' }
      ],
      fields: { text: 'text', value: 'id' },
    };
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

.custom-event-editor .e-textlabel {
  padding-right: 15px;
  text-align: right;
}

.custom-event-editor td {
  padding: 7px;
  padding-right: 16px;
}
</style>
