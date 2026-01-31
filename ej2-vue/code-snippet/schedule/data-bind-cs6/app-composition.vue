<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :currentView='currentView' :readonly='readonly' :eventSettings='eventSettings'
        :dataBinding='onDataBinding'>
      </ejs-schedule>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

var calendarId = 'en.usa%23holiday@group.v.calendar.google.com';
var publicKey = 'AIzaSyBgbX_tgmVanBP4yafDPPXxWr70sjbKAXM';
var dataManager = new DataManager({
  url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
  adaptor: new WebApiAdaptor,
  crossDomain: true
});


const height = '550px';
const eventSettings = {
  dataSource: dataManager
};
const readonly = true;
const currentView = 'Month'

const onDataBinding = function (e) {
  var items = e.result.items;
  var scheduleData = [];
  if (items.length > 0) {
    for (var i = 0; i < items.length; i++) {
      var event = items[i];
      var when = event.start.dateTime;
      var start = event.start.dateTime;
      var end = event.end.dateTime;
      if (!when) {
        when = event.start.date;
        start = event.start.date;
        end = event.end.date;
      }
      scheduleData.push({
        Id: event.id,
        Subject: event.summary,
        StartTime: new Date(start),
        EndTime: new Date(end),
        IsAllDay: !event.start.dateTime
      });
    }
  }
  e.result = scheduleData;
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);


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
</style>
