<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings' :timeScale='timeScale'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='TimelineWorkWeek'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

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
        enable: false,
      },
    }
  },
  provide: {
    schedule: [Day, Week, TimelineViews]
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
</style>
