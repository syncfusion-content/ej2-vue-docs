<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :popupOpen='onPopupOpen'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { eventData } from './datasource.js';


const height = '550px';
const width = '100%';
const views = ['Day', 'Week', 'WorkWeek', 'Month'];
const eventSettings = {
  dataSource: eventData
};
const selectedDate = new Date(2018, 1, 15);

const onPopupOpen = function (args) {
  if (args.type === 'Editor') {
    // Create required custom elements in initial time
    if (!args.element.querySelector('.custom-field-row')) {
      let row = createElement('div', { className: 'custom-field-row' });
      let formElement = args.element.querySelector('.e-schedule-form');
      formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
      let container = createElement('div', { className: 'custom-field-container' });
      let inputEle = createElement('input', {
        className: 'e-field', attrs: { name: 'EventType' }
      });
      container.appendChild(inputEle);
      row.appendChild(container);
      let dropDownList = new DropDownList({
        dataSource: [
          { text: 'Public Event', value: 'public-event' },
          { text: 'Maintenance', value: 'maintenance' },
          { text: 'Commercial Event', value: 'commercial-event' },
          { text: 'Family Event', value: 'family-event' }
        ],
        fields: { text: 'text', value: 'value' },
        value: args.data.EventType,
        floatLabelType: 'Always', placeholder: 'Event Type'
      });
      dropDownList.appendTo(inputEle);
      inputEle.setAttribute('name', 'EventType');
    }
  }
}

provide('schedule', [Day, Week, WorkWeek, Month]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";

.custom-field-row {
  padding-bottom: 14px;
}
</style>
