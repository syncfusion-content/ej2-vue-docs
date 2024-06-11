<template>
  <div id="app">
    <ejs-tab id="element" ref=element>
      <e-tabitems>
        <e-tabitem :header='headerText0' :content='Template1'></e-tabitem>
        <e-tabitem :header='headerText1' :content='Template2'></e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>
<script setup>

import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations';
import { DatePickerComponent, CalendarComponent } from '@syncfusion/ej2-vue-calendars';
import { createApp } from 'vue';

const headerText0 = { text: 'Tab1' };
const headerText1 = { text: 'Tab2' };
const Template1 = () => {
  return {
    template: createApp().component('DatePickerComponent', {
      components: {
        "ejs-datepicker": DatePickerComponent
      },
      template: ' <ejs-datepicker :min="minDate" :max="maxDate" :value="dateVal" ></ejs-datepicker>',
      data() {
        return {
          minDate: new Date("05/09/2017"),
          maxDate: new Date("05/15/2017"),
          dateVal: new Date("05/11/2017")
        };
      }
    })
  }
};
const Template2 = () => {
  return {
    template: createApp().component('DatePickerComponent', {
      components: {
        "ejs-calendar": CalendarComponent
      },
      template: '<ejs-calendar id="calendar" ></ejs-calendar>',
      data() { return {}; }
    })
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>