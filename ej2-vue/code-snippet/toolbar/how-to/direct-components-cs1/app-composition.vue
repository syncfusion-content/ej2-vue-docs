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
<script setup>

import { ToolbarComponent as EjsToolbar, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-navigations";
import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { createApp } from "vue";

const Template1 = () => {
  return {
    template: createApp().component('NumericTextBoxComponent', {
      components: {
        "ejs-numerictextbox": NumericTextBoxComponent
      },
      template: '<ejs-numerictextbox value="10"></ejs-numerictextbox>',
      data() { return {}; }
    })
  }
};
const Template2 = () => {
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

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>