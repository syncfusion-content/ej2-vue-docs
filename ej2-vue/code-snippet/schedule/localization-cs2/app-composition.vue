<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
          <e-view option='Month'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { scheduleData } from './datasource.js';
import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import * as localeText from './locale.json';
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

L10n.load(localeText);
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
setCulture('fr-CH');

const height = '550px';
const selectedDate = new Date(2018, 0, 15);
const eventSettings = { dataSource: scheduleData };

provide('schedule', [Day, Week, WorkWeek, Month]);

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
