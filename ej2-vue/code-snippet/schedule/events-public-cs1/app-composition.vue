<template>
  <div id='app'>
    <div id='container' class='col-lg-12'>
      <div class='content-wrapper'>
        <div class='col-lg-9 control-section'>
          <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate'
            :eventSettings='eventSettings' :eventClick='onEventClick'></ejs-schedule>
        </div>
        <div class='col-lg-3 property-section'>
          <table id='property' title='Event Trace'>
            <tbody>
              <tr>
                <td>
                  <div class='eventarea' style='height: 245px;overflow: auto'>
                    <span class='EventLog' id='EventLog' style='word-break: normal;'></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class='evtbtn' style='padding-bottom: 10px'>
                    <ejs-button v-on:click='onClearClick'>Clear</ejs-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { eventData } from './datasource.js';

const scheduleObj = ref(null);

const height = '550px';
const width = '100%';
const eventSettings = {
  dataSource: eventData
};
const selectedDate = new Date(2018, 1, 15);

const onClearClick = function () {
  document.getElementById('EventLog').innerHTML = '';
};
const onEventClick = function (args) {
  let event = scheduleObj.value.ej2Instances.getEventDetails(args.element);
  appendElement(event.Subject + '<hr>');
};
const appendElement = function (html) {
  let span = document.createElement('span');
  span.innerHTML = html;
  let log = document.getElementById('EventLog');
  log.insertBefore(span, log.firstChild);
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

.content-wrapper {
  display: flex;
}

.control-section {
  padding-right: 10px;
  width: 70%;
}
</style>
