<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker id="datetime" :locale="locale" :enableRtl="rtl"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>

import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';


loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
  'ar': {
    'datetimepicker': {
      placeholder: 'حدد التاريخ والوقت',
      today: 'اليوم'
    }
  }
});

const locale = "ar";
const rtl = true;

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