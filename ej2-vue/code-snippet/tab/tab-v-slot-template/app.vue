<template>
  <div id="app">
    <ejs-tab id="element">
      <e-tabitems>
        <e-tabitem :header='datePickerText' :content="'datePickerTemplate'">
          <template v-slot:datePickerTemplate>
            <ejs-datepicker></ejs-datepicker>
          </template>
        </e-tabitem>
        <e-tabitem :header='calendarText' :content="'calendarTemplate'">
          <template v-slot:calendarTemplate>
            <ejs-calendar></ejs-calendar>
          </template>
        </e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>
<script>

import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-vue-navigations';
import { DatePickerComponent, CalendarComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    "ejs-tab": TabComponent,
    "e-tabitems": TabItemsDirective,
    "e-tabitem": TabItemDirective,
    "ejs-datepicker": DatePickerComponent,
    "ejs-calendar": CalendarComponent
  },
  data: function () {
    return {
      datePickerText: { text: 'Datepicker' },
      calendarText: { text: 'Calendar' },
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
</style>