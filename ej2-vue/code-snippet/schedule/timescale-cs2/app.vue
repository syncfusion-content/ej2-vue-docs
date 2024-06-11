<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings' :timeScale='timeScale'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
        </e-views>
        <template v-slot:majorTemplateVue="{ data }">
          <div>{{ majorSlotTemplate(data.date) }}</div>
        </template>
        <template v-slot:minorTemplateVue="{ data }">
          <div style="text-align: right; margin-right: 15px">{{ minorSlotTemplate(data.date) }}</div>
        </template>
      </ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { Internationalization, extend } from '@syncfusion/ej2-base';

let instance = new Internationalization();

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
    "e-views": ViewsDirective,
    "e-view": ViewDirective
  },
  data() {
    return {
      height: '550px',
      eventSettings: { dataSource: extend([], scheduleData, null, true) },
      selectedData: new Date(2018, 1, 15),
      timeScale: {
        enable: true,
        interval: 60,
        slotCount: 6,
        majorSlotTemplate: "majorSlotTemplate",
        minorSlotTemplate: "minorSlotTemplate",
      },
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek]
  },
  methods: {
    majorSlotTemplate: function (date) {
      return instance.formatDate(date, { skeleton: 'hm' });
    },
    minorSlotTemplate: function (date) {
      return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
    }
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
</style>
