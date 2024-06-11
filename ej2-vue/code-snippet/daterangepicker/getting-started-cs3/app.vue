<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :placeholder="waterMark">
        <e-presets>
          <e-preset label="This Week" :start='weekStart' :end='weekEnd'></e-preset>
          <e-preset label="This Month" :start='monthStart' :end='monthEnd'></e-preset>
          <e-preset label="Last Month" :start='lastStart' :end='lastEnd'></e-preset>
          <e-preset label="Last Year" :start='yearStart' :end='yearEnd'></e-preset>
        </e-presets>
      </ejs-daterangepicker>
    </div>
  </div>
</template>
<script>

import { DateRangePickerComponent, PresetDirective, PresetsDirective } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    "ejs-daterangepicker": DateRangePickerComponent,
    "e-presets": PresetsDirective,
    "e-preset": PresetDirective
  },
  data() {
    return {
      waterMark: 'Selct a Range',
      weekStart: new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString()),

      weekEnd: new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
        - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString()),

      monthStart: new Date(new Date(new Date().setDate(1)).toDateString()),

      monthEnd: new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).setDate(0)).toDateString()),

      lastStart: new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString()),

      lastEnd: new Date(new Date(new Date().setDate(0)).toDateString()),
      yearStart: new Date(new Date(new Date().getFullYear() - 1, 0, 1).toDateString()),
      yearEnd: new Date(new Date(new Date().getFullYear() - 1, 11, 31).toDateString())
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>