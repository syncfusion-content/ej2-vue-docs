<template>
  <div id="app">
    <ejs-accordion>
      <e-accordionitems>
        <e-accordionitem expanded='true' header='Calendar' :content='Template1'></e-accordionitem>
        <e-accordionitem header='DatePicker' :content='Template2'></e-accordionitem>
        <e-accordionitem header='Numeric Textbox' :content='Template3'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
</template>
<script>

import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { createApp } from 'vue'
import { CalendarComponent, DatePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  name: "App",
  components: {
    "ejs-accordion": AccordionComponent,
    "e-accordionitems": AccordionItemsDirective,
    "e-accordionitem": AccordionItemDirective
  },
  data: function () {
    return {
      Template1: function () {
        return {
          template: createApp().component('CalendarComponent', {
            template: '<ejs-calendar ></ejs-calendar>',
            components: {
              'ejs-calendar': CalendarComponent,
              'ejs-datepicker': DatePickerComponent,
              "ejs-numerictextbox": NumericTextBoxComponent
            },
            data() { return {}; }
          })
        }
      },
      Template2: function () {
        return {
          template: createApp().component('DatePickerComponent', {
            template: ' <ejs-datepicker :min="minDate" :max="maxDate" :value="dateVal" ></ejs-datepicker>',
            components: {
              'ejs-datepicker': DatePickerComponent,
            },
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
      Template3: function () {
        return {
          template: createApp().component('NumericTextBoxComponent', {
            template: '<ejs-numerictextbox value="100"></ejs-numerictextbox>',
            components: {
              "ejs-numerictextbox": NumericTextBoxComponent
            },
            data() { return {}; }
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