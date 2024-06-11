<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :quickInfoTemplates='quickInfoTemplates'>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide, createApp } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const headerTemplateVue = createApp().component('headerTemplate', {
  template: `<div><div v-if= "data.elementType === 'cell' "><div class="e-cell-header">
        <div class="e-header-icon-wrapper"><button class="e-close" title="Close"></button></div></div></div>
        <div v-else><div class="e-event-header"><div class="e-header-icon-wrapper"><button class="e-close" title="CLOSE"></button></div></div></div></div>`,
  data() {
    return {
      data: {}
    };
  }
});

const contentTemplateVue = createApp().component('contentTemplate', {
  template: `<div><div v-if= "data.elementType === 'cell' "><div class="e-cell-content e-template">
        <form class="e-schedule-form"><div><input class="subject e-field" type="text" name="Subject" placeholder="Title"></div><div><input class="location e-field" type="text" name="Location" placeholder="Location"></div></form></div></div><div v-else><div class="e-event-content e-template">
        <div class="e-subject-wrap"><div><div v-if="data.Subject !== undefined"><div class="subject">{{data.Subject}}</div></div></div><div><div v-if="data.Location !== undefined"><div class="location">{{data.Location}}</div></div></div><div><div v-if="data.Description !== undefined"><div class="description">{{data.Description}}</div></div></div></div></div></div></div>`,
  data() {
    return {
      data: {}
    };
  }
});

const footerTemplateVue = createApp().component('footerTemplate', {
  template: `<div><div v-if= "data.elementType === 'cell' "><div class="e-cell-footer">
        <button class="e-event-details" title="Extra Details">Extra Details</button>
        <button class="e-event-create" title="Add">Add</button></div></div>
        <div v-else><div class="e-event-footer"><button class="e-event-edit" title="Edit">Edit</button>
        <button class="e-event-delete" title="Delete">Delete</button></div></div></div>`,
  data() {
    return {
      data: {}
    };
  }
});


const height = '550px';
const width = '100%';
const eventSettings = {
  dataSource: scheduleData
};
const selectedDate = new Date(2018, 1, 15);
const views = ['Day', 'Week', 'WorkWeek'];
const quickInfoTemplates = {
  header: function () {
    return {
      template: headerTemplateVue
    };
  },
  content: function () {
    return {
      template: contentTemplateVue
    };
  },
  footer: function () {
    return {
      template: footerTemplateVue
    };
  }
}

provide('schedule', [Day, Week, WorkWeek]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

.e-textlabel {
  font-weight: bold;
  padding-right: 5px;
}

.custom-event-editor td {
  padding: 5px;
}

.e-quick-popup-wrapper .e-cell-content {
  padding: 0 10px 10px 10px;
}

.e-quick-popup-wrapper .e-cell-content div {
  padding-bottom: 10px;
}

.e-quick-popup-wrapper .e-cell-content .e-field {
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  height: 25px;
  width: 100%;
}

.e-quick-popup-wrapper .e-event-content {
  display: flex;
}

.e-quick-popup-wrapper .e-event-header {
  position: absolute;
  right: 0;
}

.e-quick-popup-wrapper .e-cell-footer .e-event-create,
.e-quick-popup-wrapper .e-event-footer .e-event-edit {
  position: absolute;
  right: 0;
}

.e-quick-popup-wrapper .e-event-content .subject {
  padding-top: 10px;
  padding-left: 10px;
  font-weight: 500;
  font-size: 14px;
}
</style>
