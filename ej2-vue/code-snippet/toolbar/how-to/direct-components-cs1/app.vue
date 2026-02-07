<template>
  <div id="app">
    <ejs-toolbar>
      <e-items>
        <e-item :template='Template1'></e-item>
        <e-item text='Italic'></e-item>
        <e-item text='Underline'></e-item>
        <e-item type='Separator'></e-item>
        <e-item :template='Template2'></e-item>
      </e-items>
    </ejs-toolbar>
  </div>
</template>
<script>

import { ToolbarComponent, ItemDirective, ItemsDirective, } from '@syncfusion/ej2-vue-navigations';
import { DatePickerComponent, CalendarComponent } from '@syncfusion/ej2-vue-calendars';
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { createApp } from 'vue';

export default {
  name: "App",
  components: {
    "ejs-toolbar": ToolbarComponent,
    "e-items": ItemsDirective,
    "e-item": ItemDirective
  },
  data: function () {
    return {
      Template1: function () {
        return {
          template: createApp().component('NumericTextBoxComponent', {
            components: {
              "ejs-numerictextbox": NumericTextBoxComponent
            },
            template: '<ejs-numerictextbox value="10"></ejs-numerictextbox>',
            data() { return {}; }
          })
        }
      },
      Template2: function () {
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
      }
    }
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css";
</style>