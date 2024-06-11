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
<script>

import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import { DatePickerComponent, CalendarComponent } from '@syncfusion/ej2-vue-calendars';
import { createApp } from 'vue';

export default {
  name: "App",
  components: {
    "ejs-tab": TabComponent,
    "e-tabitems": TabItemsDirective,
    "e-tabitem": TabItemDirective
  },
  data: function () {
    return {
      headerText0: { text: 'Tab1' },
      headerText1: { text: 'Tab2' },
      headerText2: { text: 'Tab3' },
      Template1: function () {
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
      },
      Template2: function () {
        return {
          template: createApp().component('DatePickerComponent', {
            components: {
              "ejs-calendar": CalendarComponent
            },
            template: '<ejs-calendar id="calendar" ></ejs-calendar>',
            data() { return {}; }
          })
        }
      }
    }
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>