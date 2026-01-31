<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' readonly='true'
        :eventSettings='eventSettings'>
        <template v-slot:eventTemplate="{ data }">
          <div class='template-wrap' :style='{ background: data.SecondaryColor }'>
            <div class='subject' :style='{ background: data.PrimaryColor }'>{{ data.Subject }}</div>
            <div class="time" :style="{ background: data.PrimaryColor }">Time: {{ getTimeString(data) }}</div>
          </div>
        </template>
      </ejs-schedule>
    </div>
  </div>
</template>

<script>
import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { webinarData } from './datasource.js';

const instance = new Internationalization();

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      eventSettings: {
        template: "eventTemplate",
        dataSource: webinarData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    getTimeString: function (data) {
      return instance.formatDate(data.StartTime, { skeleton: 'hm' }) + " - " + instance.formatDate(data.EndTime, { skeleton: 'hm' });
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css';

.e-schedule .e-vertical-view .e-content-wrap .e-appointment {
  border-radius: 8px;
}

.e-schedule .e-vertical-view .e-content-wrap .e-appointment .e-appointment-details {
  padding: 0;
  height: 100%;
}

.e-schedule .template-wrap {
  height: 100%;
  white-space: normal;
}

.e-schedule .template-wrap .subject {
  font-weight: 600;
  font-size: 15px;
  padding: 4px 4px 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.e-schedule .template-wrap .time {
  height: 50px;
  font-size: 12px;
  padding: 4px 6px 4px;
  overflow: hidden;
}
</style>
