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

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { eventData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      eventSettings: {
        dataSource: eventData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    onClearClick: function () {
      document.getElementById('EventLog').innerHTML = '';
    },
    onEventClick: function (args) {
      let event = this.$refs.scheduleObj.ej2Instances.getEventDetails(args.element);
      this.appendElement(event.Subject + '<hr>');
    },
    appendElement: function (html) {
      let span = document.createElement('span');
      span.innerHTML = html;
      let log = document.getElementById('EventLog');
      log.insertBefore(span, log.firstChild);
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
}

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
