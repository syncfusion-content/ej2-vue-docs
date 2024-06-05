<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-timepicker id="timepicker" :locale="locale" :enableRtl="rtl"></ejs-timepicker>
    </div>
  </div>
</template>
<script setup>

import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { TimePickerComponent as EjsTimepicker } from '@syncfusion/ej2-vue-calendars';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

loadCldr(numberingSystems, gregorian, numbers);
L10n.load({
  'ar': {
    'timepicker': { placeholder: 'حدد الوقت' }
  }
});

const locale = "ar";
const rtl = true;

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>