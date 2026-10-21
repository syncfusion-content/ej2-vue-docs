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
<script setup>

import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations';
import { DatePickerComponent as EjsDatepicker, CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars';

const datePickerText = { text: 'Datepicker' };
const calendarText = { text: 'Calendar' };

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/tab/index.css";
</style>