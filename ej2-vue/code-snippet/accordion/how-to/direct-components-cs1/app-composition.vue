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
<script setup>
/* eslint-disable */
import { AccordionComponent as EjsAccordion, AccordionItemDirective as EAccordionitem, AccordionItemsDirective as EAccordionitems } from "@syncfusion/ej2-vue-navigations";
import { createApp, } from "vue";
import { CalendarComponent } from '@syncfusion/ej2-vue-calendars';
import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

const contentTemplate1 = createApp().component('CalendarTemplate', {
  components: {
    'ejs-calendar': CalendarComponent
  },
  template: `<ejs-calendar ></ejs-calendar>`,
  data() { return {}; }
});
const Template1 = () => {
  return {
    template: contentTemplate1
  };
};
const contentTemplate2 = createApp().component('DatePickerTemplate', {
  components: {
    'ejs-datepicker': DatePickerComponent
  },
  template: ' <ejs-datepicker :min="minDate" :max="maxDate" :value="dateVal" ></ejs-datepicker>',
  data() {
    return {
      minDate: new Date("05/09/2017"),
      maxDate: new Date("05/15/2017"),
      dateVal: new Date("05/11/2017")
    };
  }
});
const Template2 = () => {
  return {
    template: contentTemplate2
  };
}
const contentTemplate3 = createApp().component('NumericTextBoxTemplate', {
  components: {
    'ejs-numerictextbox': NumericTextBoxComponent
  },
  template: '<ejs-numerictextbox value="100"></ejs-numerictextbox>',
  data() { return {}; }
});
const Template3 = () => {
  return {
    template: contentTemplate3
  };
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css";
</style>