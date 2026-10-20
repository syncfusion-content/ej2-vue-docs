<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-timepicker id="timepicker" locale="de"></ejs-timepicker>
    </div>
  </div>
</template>
<script>

import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { TimePickerComponent } from '@syncfusion/ej2-vue-calendars';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

loadCldr(numberingSystems, gregorian, numbers);
L10n.load({
  'de': {
    'timepicker': { placeholder: 'Wählen Sie Zeit' }
  }
});

export default {
  name: "App",
  components: {
    "ejs-timepicker": TimePickerComponent
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/timepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>