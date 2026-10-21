<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-datetimepicker id="datetime" :locale="locale" :enableRtl="rtl"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script>

import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-vue-calendars';
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
export default {
  name: "App",
  components: {
    "ejs-datetimepicker": DateTimePickerComponent
  },
  data() {
    return {
      locale: "ar",
      rtl: true
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>