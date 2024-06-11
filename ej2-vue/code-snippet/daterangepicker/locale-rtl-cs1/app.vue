<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker id="daterange" :locale="locale" :enableRtl="rtl"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script>

import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DateRangePickerComponent } from '@syncfusion/ej2-vue-calendars';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
  'he': {
    'daterangepicker': {
      placeholder: 'בחר טווח',
      startLabel: 'תווית התחלה',
      endLabel: 'ח',
      applyText: 'להחיל טקסט',
      cancelText: 'בטל טקסט',
      selectedDays: 'ימים נבחרים',
      days: 'أימים',
      customRange: 'טווח מותאם אישית'
    }
  }
});
export default {
  name: "App",
  components: {
    "ejs-daterangepicker": DateRangePickerComponent
  },
  data() {
    return {
      locale: "he",
      rtl: true
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