<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker id="daterange" locale="de"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script setup>

import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';


loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
  'de': {
    'daterangepicker': {
      placeholder: 'Wählen Sie einen Bereich aus',
      startLabel: 'Wählen Sie Startdatum',
      endLabel: 'Wählen Sie Enddatum',
      applyText: 'Sich bewerben',
      cancelText: 'Stornieren',
      selectedDays: 'Ausgewählte Tage',
      days: 'Tage',
      customRange: 'benutzerdefinierten Bereich'
    }
  }
});

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