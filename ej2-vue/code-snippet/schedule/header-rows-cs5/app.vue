<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :views='views'>
        <e-header-rows>
          <e-header-row option="Month" :template="'monthHeaderTemplate'"></e-header-row>
          <template v-slot:monthHeaderTemplate="{ data }">
            <span class="month">{{ getMonthDetails(data) }}</span>
          </template>
          <e-header-row option="Week" :template="'weekHeaderTemplate'"></e-header-row>
          <template v-slot:weekHeaderTemplate="{ data }">
            <span class="week">{{ getWeekDetails(data) }}</span>
          </template>
          <e-header-row option="Week" :template="'yearHeaderTemplate'"></e-header-row>
          <template v-slot:yearHeaderTemplate="{ data }">
            <span class="year">{{ getYearDetails(data) }}</span>
          </template>
        </e-header-rows>
      </ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, getWeekNumber } from '@syncfusion/ej2-vue-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventData } from './datasource.js';

var instance = new Internationalization();

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
    "e-header-rows": HeaderRowsDirective,
    "e-header-row": HeaderRowDirective
  },
  data() {
    return {
      width: '100%',
      height: '550px',
      selectedDate: new Date(2018, 0, 1),
      views: [{ option: 'TimelineMonth' }],
      eventSettings: { dataSource: eventData }
    }
  },
  provide: {
    schedule: [TimelineMonth]
  },
  methods: {
    getWeekDetails: function (value) {
      return 'Week: ' + getWeekNumber(value.date);
    },
    getMonthDetails: function (value) {
      return 'Month ' + instance.formatDate(value.date, { skeleton: 'M' });
    },
    getYearDetails: function (value) {
      return 'Year: ' + instance.formatDate(value.date, { skeleton: 'y' });
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
